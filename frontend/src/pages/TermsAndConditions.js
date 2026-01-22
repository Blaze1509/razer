import React from 'react';

function TermsAndConditions() {
  return (
    <div style={{ padding: 40, maxWidth: 800, margin: '0 auto' }}>
      <h1>Terms and Conditions</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

      <h3>1. Acceptance of Terms</h3>
      <p>By using our payment services, you agree to these terms and conditions.</p>

      <h3>2. Payment Processing</h3>
      <p>All payments are processed securely through Razorpay. We do not store your payment information.</p>

      <h3>3. User Responsibilities</h3>
      <p>Users must provide accurate payment information and are responsible for all charges made through their account.</p>

      <h3>4. Service Availability</h3>
      <p>We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service.</p>

      <h3>5. Limitation of Liability</h3>
      <p>Our liability is limited to the amount of the transaction in question.</p>

      <h3>6. Modifications</h3>
      <p>We reserve the right to modify these terms at any time. Changes will be posted on this page.</p>

      <h3>7. Contact Information</h3>
      <p>For questions about these terms, contact us at joypatel1509@gmail.com</p>
    </div>
  );
}

export default TermsAndConditions;