
"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* =========================
          TOP FOOTER
      ========================== */}
      <div className="footer-main">
        <div className="footer-container">

          {/* LOGO + SOCIAL */}
          <div className="footer-brand">

            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Afghan Youth Services Organization (AYSO)"
                className="footer-logo"
              />
            </Link>

            <p className="footer-tagline">
              We strive to work towards
              <br />
              serving humanity
            </p>

            <div className="footer-socials">

              {/* Facebook */}
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1z"
                  />
                </svg>
              </a>

              {/* X */}
              <a href="#" aria-label="X">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M5 4l14 16M19 4L5 20"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                  />
                  <path
                    d="M7 10v7M7 7v.01M11 17v-4c0-2 3-2 3 0v4M11 10v7"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M21 7.5c-.2-1.1-1.1-2-2.2-2.2C17.2 5 15 5 12 5s-5.2 0-6.8.3C4.1 5.5 3.2 6.4 3 7.5 2.8 8.7 2.8 10 2.8 12s0 3.3.2 4.5c.2 1.1 1.1 2 2.2 2.2 1.6.3 3.8.3 6.8.3s5.2 0 6.8-.3c1.1-.2 2-1.1 2.2-2.2.2-1.2.2-2.5.2-4.5s0-3.3-.2-4.5z"
                  />
                  <path
                    d="M10 9l5 3-5 3V9z"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

            </div>
          </div>


          {/* ABOUT US */}
          <div className="footer-column">
            <h3>About Us</h3>

            <Link href="/mission">
              Our Mission
            </Link>

            <Link href="/team">
              Team
            </Link>

            <Link href="/impact">
              Impact
            </Link>

            <Link href="/careers">
              Careers
            </Link>
          </div>


          {/* GET INVOLVED */}
          <div className="footer-column">
            <h3>Get Involved</h3>

            <Link href="/donate">
              Donate
            </Link>

            <Link href="/volunteer">
              Volunteer
            </Link>
          </div>


          {/* RESOURCES */}
          <div className="footer-column">
            <h3>Resources</h3>

            <Link href="/blog">
              Blog
            </Link>

            <Link href="/reports">
              Reports
            </Link>

            <Link href="/contact">
              Contact
            </Link>
          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact-column">

            <h3>Contact Us</h3>

            {/* Address */}
            <div className="footer-contact-item">

              <span className="contact-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 21s7-6.1 7-12a7 7 0 10-14 0c0 5.9 7 12 7 12z"
                  />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>

              <span>
                Zone 4th,  
                <br />
               Near to UNICEF OFFICE,
                <br />
               Jalalabad City,
                <br />
                 Afghanistan
              </span>
            </div>

            {/* Phone */}
            <div className="footer-contact-item">

              <span className="contact-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M5 4l3 1 2 5-2 2c1 2 2 3 4 4l2-2 5 2 1 3c.2 1-.6 2-1.5 2C10 21 3 14 3 5.5 3 4.6 4 3.8 5 4z"
                  />
                </svg>
              </span>

              <a href="tel:0202205107">
                 0093777641457  0093700641457
              </a>

            </div>


            {/* Email */}
            <div className="footer-contact-item">

              <span className="contact-icon">
                <svg viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                  <path d="M4 7l8 6 8-6" />
                </svg>
              </span>

              <a href="mailto:info@ayso.org.af">
            info@cdsaco.org
              </a>

            </div>

          </div>

        </div>
      </div>


      {/* =========================
          BOTTOM FOOTER
      ========================== */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} AYSO. All rights reserved.
          </p>

          <div className="footer-legal">

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms of Service
            </Link>

            <Link href="/cookies">
              Cookie Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}