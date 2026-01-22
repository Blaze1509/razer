import React from 'react';

function ContactUs() {
  return (
    <div style={{ padding: 40, maxWidth: 800, margin: '0 auto' }}>
      <h1>Contact Us</h1>
      
      <div style={{ marginBottom: 30 }}>
        <h3>Get in Touch</h3>
        <p>We're here to help! Contact us for any questions or support.</p>
      </div>

      <div style={{ marginBottom: 20 }}>
        <h4>Business Information</h4>
        <p><strong>Company Name:</strong> Your Company Name</p>
        <p><strong>Email:</strong> joypatel1509@gmail.com</p>
        <p><strong>Phone:</strong> +91-9265900554</p>
        <p><strong>Address:</strong> Vaikunth Dham near Gokuldham, Unjha, Gujrat, 384170</p>
      </div>

      <div style={{ marginBottom: 20 }}>
        <h4>Business Hours</h4>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>

      <div>
        <h4>Support</h4>
        <p>For payment related queries, please email us at joypatel1509@gmail.com</p>
        <p>Response time: Within 24 hours</p>
      </div>
    </div>
  );
}

export default ContactUs;