import React from 'react';

function PrivacyPolicy() {
  return (
    <div style={{ padding: 40, maxWidth: 800, margin: '0 auto' }}>
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

      <h3>1. Information We Collect</h3>
      <p>We collect information necessary to process payments, including name, email, and payment details.</p>

      <h3>2. How We Use Information</h3>
      <p>Your information is used solely for payment processing and customer support.</p>

      <h3>3. Information Sharing</h3>
      <p>We share payment information only with Razorpay for payment processing. We do not sell your data.</p>

      <h3>4. Data Security</h3>
      <p>All payment data is encrypted and processed through secure channels. We follow industry-standard security practices.</p>

      <h3>5. Cookies</h3>
      <p>We use essential cookies for website functionality. No tracking cookies are used.</p>

      <h3>6. Your Rights</h3>
      <p>You have the right to access, update, or delete your personal information. Contact us for requests.</p>

      <h3>7. Contact Us</h3>
      <p>For privacy concerns, email us at joypatel1509@gmail.com</p>
    </div>
  );
}

export default PrivacyPolicy;