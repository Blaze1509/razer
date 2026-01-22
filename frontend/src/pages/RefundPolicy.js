import React from 'react';

function RefundPolicy() {
  return (
    <div style={{ padding: 40, maxWidth: 800, margin: '0 auto' }}>
      <h1>Cancellations and Refunds</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

      <h3>1. Cancellation Policy</h3>
      <p>You may cancel your order within 24 hours of payment for a full refund.</p>

      <h3>2. Refund Eligibility</h3>
      <p>Refunds are available for:</p>
      <ul>
        <li>Duplicate payments</li>
        <li>Technical errors during payment</li>
        <li>Cancellations within 24 hours</li>
      </ul>

      <h3>3. Refund Process</h3>
      <p>Refunds are processed within 5-7 business days to the original payment method.</p>

      <h3>4. Non-Refundable Items</h3>
      <p>The following are not eligible for refunds:</p>
      <ul>
        <li>Services already delivered</li>
        <li>Cancellations after 24 hours</li>
      </ul>

      <h3>5. How to Request a Refund</h3>
      <p>Email us at joypatel1509@gmail.com with your payment ID and reason for refund.</p>

      <h3>6. Processing Time</h3>
      <p>Refund requests are reviewed within 2 business days. Approved refunds take 5-7 days to reflect.</p>

      <h3>7. Contact for Refunds</h3>
      <p>For refund queries, contact joypatel1509@gmail.com</p>
    </div>
  );
}

export default RefundPolicy;