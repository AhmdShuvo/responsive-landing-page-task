import React from 'react';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Contact Us</h2>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="#" className="icon-link"><i class="fa-brands fa-facebook"></i></a>
              <a href="#" className="icon-link"><i class="fa-brands fa-twitter"></i></a>
              <a href="#" className="icon-link"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-md-4">
            <h2>Newsletter</h2>
            <p>Subscribe to our newsletter for updates and news.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" className="form-control" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;