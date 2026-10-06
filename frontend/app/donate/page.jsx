"use client";

import { useState } from "react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function DonateSection() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(field);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  // Simple inline icons
  const BankIcon = () => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 9h10" />
      <path d="M7 13h3" />
      <path d="M15 13h2" />
    </svg>
  );

  const MailIcon = () => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const LocationIcon = () => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );

  const CopyIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );

  return (
    <>
    <SiteHeader/>
      {/* =====================================================
          DONATE INTRO
      ===================================================== */}
      <section
        style={{
          background: "#ffffff",
          padding: "67px 20px 52px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#2d7eae",
              color: "#fff",
              borderRadius: "8px",
              padding: "12px 24px 14px",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(40px, 5vw, 60px)",
                lineHeight: "1.15",
                fontWeight: 800,
              }}
            >
              Donate Now
            </h2>
          </div>

          <p
            style={{
              margin: 0,
              maxWidth: "950px",
              color: "#244d73",
              fontSize: "clamp(17px, 1.8vw, 21px)",
              lineHeight: "1.55",
            }}
          >
            Your contribution helps us reach millions of children and families
            across Afghanistan with life-changing programs in health,
            education, nutrition, and emergency response. Every donation makes
            a difference.
          </p>
        </div>
      </section>

      {/* =====================================================
          BANK + CONTACT SECTION
      ===================================================== */}
      <section
        style={{
          background: "#f7f9fb",
          padding: "10px 20px 70px",
        }}
      >
        <div
          className="donate-info-grid"
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* =================================================
              BANK TRANSFER
          ================================================= */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "40px",
              boxShadow: "0 2px 10px rgba(20, 50, 80, 0.03)",
            }}
          >
            {/* Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "25px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  background: "#d7ecfb",
                  color: "#1877b5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <BankIcon />
              </div>

              <h2
                style={{
                  margin: 0,
                  color: "#061d3b",
                  fontSize: "clamp(25px, 3vw, 32px)",
                  lineHeight: "1.2",
                  fontWeight: 800,
                }}
              >
                Bank Transfer Details
              </h2>
            </div>

            {/* Description */}
            <p
              style={{
                margin: "0 0 32px",
                color: "#244d73",
                fontSize: "17px",
                lineHeight: "1.55",
              }}
            >
              You can make a direct bank transfer to our account. Please
              include your name and contact information in the transfer
              reference.
            </p>

            {/* Bank Details Box */}
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #dce5ee",
                borderRadius: "12px",
                padding: "25px 24px",
              }}
            >
              {/* Bank Name */}
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    color: "#526b85",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    marginBottom: "6px",
                  }}
                >
                  BANK NAME
                </div>

                <div
                  style={{
                    color: "#061d3b",
                    fontSize: "17px",
                    fontWeight: 700,
                    lineHeight: "1.4",
                  }}
                >
                  Afghanistan International Bank (AIB)
                </div>
              </div>

              {/* Account Name */}
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    color: "#526b85",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    marginBottom: "6px",
                  }}
                >
                  ACCOUNT NAME
                </div>

                <div
                  style={{
                    color: "#061d3b",
                    fontSize: "17px",
                    fontWeight: 700,
                    lineHeight: "1.4",
                  }}
                >
                  Afghan Youth Services Organization (AYSO)
                </div>
              </div>

              {/* Account Number */}
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    color: "#526b85",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    marginBottom: "6px",
                  }}
                >
                  ACCOUNT NUMBER
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      color: "#061d3b",
                      fontSize: "17px",
                      fontWeight: 700,
                      fontFamily: "monospace",
                    }}
                  >
                    0263112100548701
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        "0263112100548701",
                        "account"
                      )
                    }
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "#147bb5",
                      padding: "3px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                    aria-label="Copy account number"
                  >
                    <CopyIcon />
                  </button>

                  {copied === "account" && (
                    <span
                      style={{
                        color: "#16804b",
                        fontSize: "13px",
                        fontWeight: 600,
                      }}
                    >
                      Copied!
                    </span>
                  )}
                </div>
              </div>

              {/* SWIFT */}
              <div>
                <div
                  style={{
                    color: "#526b85",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    marginBottom: "6px",
                  }}
                >
                  SWIFT CODE
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      color: "#061d3b",
                      fontSize: "17px",
                      fontWeight: 700,
                      fontFamily: "monospace",
                    }}
                  >
                    AFIBAFAKXXX
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard("AFIBAFAKXXX", "swift")
                    }
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "#147bb5",
                      padding: "3px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                    aria-label="Copy SWIFT code"
                  >
                    <CopyIcon />
                  </button>

                  {copied === "swift" && (
                    <span
                      style={{
                        color: "#16804b",
                        fontSize: "13px",
                        fontWeight: 600,
                      }}
                    >
                      Copied!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTACT US
          ================================================= */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "40px",
              boxShadow: "0 2px 10px rgba(20, 50, 80, 0.03)",
            }}
          >
            {/* Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "25px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  background: "#d7ecfb",
                  color: "#1877b5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MailIcon />
              </div>

              <h2
                style={{
                  margin: 0,
                  color: "#061d3b",
                  fontSize: "clamp(25px, 3vw, 32px)",
                  lineHeight: "1.2",
                  fontWeight: 800,
                }}
              >
                Contact Us
              </h2>
            </div>

            {/* Description */}
            <p
              style={{
                margin: "0 0 32px",
                color: "#244d73",
                fontSize: "17px",
                lineHeight: "1.55",
              }}
            >
              Have questions about making a donation? We're here to help.
              Reach out to us through any of the following channels.
            </p>

            {/* Email */}
            <div
              style={{
                background: "#f7f9fb",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "24px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  background: "#d7ecfb",
                  color: "#1877b5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MailIcon />
              </div>

              <div>
                <h3
                  style={{
                    margin: "2px 0 5px",
                    color: "#061d3b",
                    fontSize: "16px",
                    fontWeight: 800,
                  }}
                >
                  Email
                </h3>

                <a
                  href="mailto:info@ayso.org.af"
                  style={{
                    color: "#147bb5",
                    fontSize: "16px",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  info@ayso.org.af
                </a>

                <p
                  style={{
                    margin: 0,
                    color: "#244d73",
                    fontSize: "14px",
                    lineHeight: "1.4",
                  }}
                >
                  General inquiries and donation confirmations
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              style={{
                background: "#f7f9fb",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "24px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  background: "#d7ecfb",
                  color: "#1877b5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <PhoneIcon />
              </div>

              <div>
                <h3
                  style={{
                    margin: "2px 0 5px",
                    color: "#061d3b",
                    fontSize: "16px",
                    fontWeight: 800,
                  }}
                >
                  Phone
                </h3>

                <a
                  href="tel:0202205107"
                  style={{
                    color: "#147bb5",
                    fontSize: "16px",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  020 220 5107
                </a>

                <p
                  style={{
                    margin: 0,
                    color: "#244d73",
                    fontSize: "14px",
                    lineHeight: "1.4",
                  }}
                >
                  General Director - Dr. Wahidullah Taroon
                </p>
              </div>
            </div>

            {/* Address */}
            <div
              style={{
                background: "#f7f9fb",
                borderRadius: "12px",
                padding: "16px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  background: "#d7ecfb",
                  color: "#1877b5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <LocationIcon />
              </div>

              <div>
                <h3
                  style={{
                    margin: "2px 0 5px",
                    color: "#061d3b",
                    fontSize: "16px",
                    fontWeight: 800,
                  }}
                >
                  Address
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#244d73",
                    fontSize: "15px",
                    lineHeight: "1.5",
                  }}
                >
                  Afghanistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* =====================================================
          IMPORTANT NOTE + WHY YOUR DONATION MATTERS
      ===================================================== */}
      <section
        style={{
          background: "#f7f9fb",
          padding: "0 20px 70px",
        }}
      >
        <div
          className="donation-bottom-grid"
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "stretch",
          }}
        >
          {/* =================================================
              IMPORTANT NOTE
          ================================================= */}
          <div
            style={{
              background: "#e8f5ff",
              border: "1px solid #8dccf5",
              borderRadius: "12px",
              padding: "25px 28px",
              minHeight: "150px",
              boxSizing: "border-box",
            }}
          >
            {/* Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "13px",
                marginBottom: "8px",
              }}
            >
              {/* Info Icon */}
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#287faf",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                i
              </div>

              <h3
                style={{
                  margin: 0,
                  color: "#061d3b",
                  fontSize: "16px",
                  fontWeight: 800,
                }}
              >
                Important Note
              </h3>
            </div>

            {/* Description */}
            <p
              style={{
                margin: "0 0 0 33px",
                color: "#244d73",
                fontSize: "15px",
                lineHeight: "1.55",
              }}
            >
              After making your transfer, please send us a confirmation email
              at{" "}
              <a
                href="mailto:info@ayso.org.af"
                style={{
                  color: "#147bb5",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                info@ayso.org.af
              </a>{" "}
              with your name, donation amount, and transfer reference number.
              This helps us track and acknowledge your contribution.
            </p>
          </div>

          {/* =================================================
              WHY YOUR DONATION MATTERS
          ================================================= */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 8px 20px rgba(20, 50, 80, 0.08)",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                margin: "0 0 24px",
                color: "#061d3b",
                fontSize: "22px",
                lineHeight: "1.3",
                fontWeight: 800,
              }}
            >
              Why Your Donation Matters
            </h2>

            {/* Direct Impact */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "17px",
                  height: "17px",
                  minWidth: "17px",
                  borderRadius: "50%",
                  background: "#287faf",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "3px",
                  fontSize: "11px",
                  fontWeight: 800,
                }}
              >
                ✓
              </div>

              <p
                style={{
                  margin: 0,
                  color: "#173b68",
                  fontSize: "15px",
                  lineHeight: "1.5",
                }}
              >
                <strong style={{ color: "#061d3b" }}>
                  Direct Impact:
                </strong>{" "}
                Every dollar goes directly to programs serving vulnerable
                communities across Afghanistan.
              </p>
            </div>

            {/* Transparency */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "17px",
                  height: "17px",
                  minWidth: "17px",
                  borderRadius: "50%",
                  background: "#287faf",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "3px",
                  fontSize: "11px",
                  fontWeight: 800,
                }}
              >
                ✓
              </div>

              <p
                style={{
                  margin: 0,
                  color: "#173b68",
                  fontSize: "15px",
                  lineHeight: "1.5",
                }}
              >
                <strong style={{ color: "#061d3b" }}>
                  Transparency:
                </strong>{" "}
                We maintain the highest standards of financial accountability
                and transparency.
              </p>
            </div>

            {/* Certified */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "17px",
                  height: "17px",
                  minWidth: "17px",
                  borderRadius: "50%",
                  background: "#287faf",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "3px",
                  fontSize: "11px",
                  fontWeight: 800,
                }}
              >
                ✓
              </div>

              <p
                style={{
                  margin: 0,
                  color: "#173b68",
                  fontSize: "15px",
                  lineHeight: "1.5",
                }}
              >
                <strong style={{ color: "#061d3b" }}>
                  Certified:
                </strong>{" "}
                ISO Certified, Low Risk Rating (UNICEF), and PSEAH Certified
                organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESPONSIVE STYLES
      ===================================================== */}
      <style jsx>{`
        @media (max-width: 900px) {
          .donation-info-grid {
            grid-template-columns: 1fr !important;
          }

          .donation-bottom-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
        }

        @media (max-width: 600px) {
          .donation-bottom-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* =====================================================
          RESPONSIVE STYLES
      ===================================================== */}
      <style jsx>{`
        @media (max-width: 900px) {
          .donate-info-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
        }

        @media (max-width: 600px) {
          .donate-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <SiteFooter/>
    </>
  );
}