import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const MIN_AMOUNT = 1; // Minimum ₹1 as per Razorpay

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const payNow = async () => {
    const paymentAmount = parseFloat(amount);
    
    if (!paymentAmount || paymentAmount < MIN_AMOUNT) {
      alert(`Please enter a valid amount. Minimum amount is ₹${MIN_AMOUNT}`);
      return;
    }

    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed");
      return;
    }

    const orderRes = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/create-order`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: paymentAmount }),
      }
    );

    const order = await orderRes.json();

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "My App",
      description: "Test Payment",
      order_id: order.id,
      handler: async function (response) {
        const verifyRes = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/verify-payment`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          }
        );

        const result = await verifyRes.json();
        alert("Payment " + result.status);
      },
      theme: { color: "#3399cc" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Razorpay Payment</h2>
      <div style={{ marginBottom: 20 }}>
        <label>Payment Amount (₹): </label>
        <input
          type="number"
          min={MIN_AMOUNT}
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={`Min ₹${MIN_AMOUNT}`}
          style={{ marginLeft: 10, padding: 5 }}
        />
      </div>
      <button onClick={payNow} disabled={!amount}>
        Pay ₹{amount || "0"}
      </button>
      <p style={{ fontSize: 12, color: "#666", marginTop: 10 }}>
        Minimum payment amount: ₹{MIN_AMOUNT}
      </p>
    </div>
  );
}

export default App;
