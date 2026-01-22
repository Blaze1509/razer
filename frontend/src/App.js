import React, { useState } from "react";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";

function App() {
  const [amount, setAmount] = useState("");
  const [currentPage, setCurrentPage] = useState("home");
  const MIN_AMOUNT = 1;

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

  const renderPage = () => {
    switch(currentPage) {
      case "contact": return <ContactUs />;
      case "terms": return <TermsAndConditions />;
      case "privacy": return <PrivacyPolicy />;
      case "refund": return <RefundPolicy />;
      case "shipping": return <ShippingPolicy />;
      default: return (
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
  };

  return (
    <div>
      <nav style={{ padding: 20, borderBottom: "1px solid #ccc", marginBottom: 20 }}>
        <button onClick={() => setCurrentPage("home")} style={{ marginRight: 10 }}>Home</button>
        <button onClick={() => setCurrentPage("contact")} style={{ marginRight: 10 }}>Contact Us</button>
        <button onClick={() => setCurrentPage("terms")} style={{ marginRight: 10 }}>Terms</button>
        <button onClick={() => setCurrentPage("privacy")} style={{ marginRight: 10 }}>Privacy</button>
        <button onClick={() => setCurrentPage("refund")} style={{ marginRight: 10 }}>Refunds</button>
        <button onClick={() => setCurrentPage("shipping")} style={{ marginRight: 10 }}>Shipping</button>
      </nav>
      {renderPage()}
      <footer style={{ padding: 20, borderTop: "1px solid #ccc", marginTop: 40, textAlign: "center" }}>
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
