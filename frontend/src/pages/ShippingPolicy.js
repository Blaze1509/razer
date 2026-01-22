import React from 'react';

function ShippingPolicy() {
  return (
    <div style={{ padding: 40, maxWidth: 800, margin: '0 auto' }}>
      <h1>Shipping Policy</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

      <h3>1. Digital Services</h3>
      <p>This is a digital payment service. No physical shipping is required.</p>

      <h3>2. Service Delivery</h3>
      <p>Payment processing services are delivered instantly upon successful payment.</p>

      <h3>3. Confirmation</h3>
      <p>You will receive email confirmation immediately after successful payment processing.</p>

      <h3>4. Service Areas</h3>
      <p>Our payment services are available across India through Razorpay's network.</p>

      <h3>5. Technical Requirements</h3>
      <p>Ensure stable internet connection for smooth payment processing.</p>

      <h3>6. Support</h3>
      <p>For any service delivery issues, contact joypatel1509@gmail.com</p>
    </div>
  );
}

export default ShippingPolicy;