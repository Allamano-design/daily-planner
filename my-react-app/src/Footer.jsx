import React, { useState, useEffect } from "react";
import appstorelogo from './assets/appstorelogo.jpg';
import playstore from './assets/playstore.jpg';
import facebook from './assets/facebook.jpg';
import x from './assets/x.jpg';
import tiktok from './assets/tiktok.jpg';
import instagram from './assets/instagram.jpg';
import github from './assets/github.jpg';

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-details">
        <h2 className="text1">Download Our App</h2>
        <div className="logo">
          <img src={appstorelogo} alt="App Store" className="app-logo" />
          <img src={playstore} alt="Play Store" className="app-logo" />
          </div>
          
          <div className="support-links">
            <h2 className="author"><p>📍 Nairobi, Kenya</p></h2>
              {/* Embedded Google Map */}
                <div className="map-container">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.860826644707!2d36.82194651526057!3d-1.292065999054537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d1df34d1af%3A0xabcdefabcdefabcd!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1691234567890!5m2!1sen!2ske"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: "8px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nairobi Map"
                    ></iframe>
                </div>
            <h2 className="author"><p>📞 +254 769 610343</p></h2>
            <h2 className="author"><p>✉️ allamanojoseph00@gmail.com</p></h2>
            <div className="about">
              <h3 className="about-title">About Us</h3>
              <p>Daily Purpose App is a personal productivity and wellness companion designed to help users organize their day, stay healthy, track work progress, and maintain social connections.</p>
              <div className="social-links">
                <a href="https://twitter.com/bitsmanor" target="_blank" rel="noopener noreferrer">
                  <img src={x} alt="Twitter" className="social-logo" />
                </a>
                <a href="https://instagram.com/m_anor_0" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram" className="social-logo" />
                </a>
                <a href="https://tiktok.com/@manor_72" target="_blank" rel="noopener noreferrer">
                  <img src={tiktok} alt="TikTok" className="social-logo" />
                </a>
                <a href="https://github.com/Allamano-design" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" className="social-logo" />
                </a>
                <a href="https://facebook.com/ManorManor" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="Facebook" className="social-logo" />
                </a>
              </div>
            {/* Bottom horizontal line */}
               <hr className="footer-line" />

            {/* Copyright */}
                <p className="copyright">
                  &copy; {new Date().getFullYear()} Daily Purpose App. All rights reserved.
                </p>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Footer;