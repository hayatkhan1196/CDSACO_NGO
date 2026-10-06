"use client";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function MessageFromDirector() {
  return (
    <>
      <SiteHeader />

      {/* =====================================================
    MESSAGE FROM DIRECTOR + DIRECTOR PROFILE
===================================================== */}
<section
  style={{
    background: "#ffffff",
    padding: "0 20px 80px",
    marginTop:"10px"
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "1150px",
      margin: "0 auto",
    }}
  >
    <div
      className="director-main-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "372px minmax(0, 1fr)",
        gap: "48px",
        alignItems: "start",
      }}
    >
      {/* =================================================
          LEFT DIRECTOR CARD
      ================================================= */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e1e8ee",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 5px 18px rgba(20, 50, 80, 0.10)",
        }}
      >
        {/* Director Image */}
        <div
          style={{
            position: "relative",
            height: "320px",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/director.jpg"
            alt="Dr. Wahidullah Taroon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />

          {/* Image overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.05) 65%)",
            }}
          />

          {/* Director name */}
          <div
            style={{
              position: "absolute",
              left: "24px",
              right: "20px",
              bottom: "25px",
              color: "#ffffff",
            }}
          >
            <h2
              style={{
                margin: "0 0 6px",
                fontSize: "25px",
                lineHeight: "1.25",
                fontWeight: 800,
              }}
            >
           Mr. Safeer Ahmad Safi
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: "1.4",
                fontWeight: 600,
              }}
            >
              General Director and Founder
            </p>
          </div>
        </div>

        {/* =================================================
            DETAILED BIOGRAPHY
        ================================================= */}
        <div
          style={{
            padding: "26px 24px 25px",
          }}
        >
          <p
            style={{
              margin: "0 0 24px",
              color: "#405570",
              fontSize: "15px",
              lineHeight: "1.58",
            }}
          >
            Mr. Safeer Ahmad Safi is the visionary founder of Afghan Youth
            Services Organization (CDSACO), established in February 2006. With
            unwavering commitment to empowering Afghan communities, he has led
            CDSACO to become a trusted humanitarian organization serving all 34
            provinces of Afghanistan.
          </p>

          <p
            style={{
              margin: "0 0 24px",
              color: "#405570",
              fontSize: "15px",
              lineHeight: "1.58",
            }}
          >
            Under his leadership, AYSO has developed and implemented
            humanitarian and development programs that respond to the needs
            of vulnerable communities, with a particular focus on children,
            families, women, and underserved populations.
          </p>

          <p
            style={{
              margin: "0 0 24px",
              color: "#405570",
              fontSize: "15px",
              lineHeight: "1.58",
            }}
          >
            His vision is centered on creating sustainable opportunities,
            strengthening communities, and ensuring that humanitarian
            assistance reaches those who need it most.
          </p>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "#dce5ed",
              margin: "4px 0 24px",
            }}
          />

          {/* =================================================
              STATISTICS
          ================================================= */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Years */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div className="director-stat-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h18" />
                </svg>
              </div>

              <div>
                <strong
                  style={{
                    display: "block",
                    color: "#061d3b",
                    fontSize: "17px",
                    lineHeight: "1.2",
                  }}
                >
                  20+
                </strong>

                <span
                  style={{
                    color: "#526b85",
                    fontSize: "13px",
                  }}
                >
                  Years of Service
                </span>
              </div>
            </div>

            {/* Provinces */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div className="director-stat-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18" />
                  <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9" />
                  <path d="M12 3c-2.4 2.5-3.6 5.5-3.6 9s1.2 6.5 3.6 9" />
                </svg>
              </div>

              <div>
                <strong
                  style={{
                    display: "block",
                    color: "#061d3b",
                    fontSize: "17px",
                    lineHeight: "1.2",
                  }}
                >
                  34
                </strong>

                <span
                  style={{
                    color: "#526b85",
                    fontSize: "13px",
                  }}
                >
                  Provinces Reached
                </span>
              </div>
            </div>

            {/* Beneficiaries */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div className="director-stat-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="8" r="3" />
                  <path d="M3 20c0-3.2 2.6-5 6-5s6 1.8 6 5" />
                  <path d="M16 5.5a3 3 0 0 1 0 5.8" />
                  <path d="M17 15c2.5.4 4 2 4 4" />
                </svg>
              </div>

              <div>
                <strong
                  style={{
                    display: "block",
                    color: "#061d3b",
                    fontSize: "17px",
                    lineHeight: "1.2",
                  }}
                >
                  17+ Million
                </strong>

                <span
                  style={{
                    color: "#526b85",
                    fontSize: "13px",
                  }}
                >
                  Beneficiaries Served
                </span>
              </div>
            </div>

            {/* Projects */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div className="director-stat-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <path d="M3 12h18" />
                  <path d="M10 12v2h4v-2" />
                </svg>
              </div>

              <div>
                <strong
                  style={{
                    display: "block",
                    color: "#061d3b",
                    fontSize: "17px",
                    lineHeight: "1.2",
                  }}
                >
                  250+
                </strong>

                <span
                  style={{
                    color: "#526b85",
                    fontSize: "13px",
                  }}
                >
                  Projects Implemented
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          RIGHT MESSAGE
      ================================================= */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e1e8ee",
          borderRadius: "14px",
          padding: "40px",
          boxShadow: "0 5px 18px rgba(20, 50, 80, 0.08)",
        }}
      >
        {/* Message heading */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            paddingBottom: "24px",
            marginBottom: "32px",
            borderBottom: "1px solid #dce5ed",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              minWidth: "56px",
              borderRadius: "12px",
              background: "#d7ecfb",
              color: "#2d7eae",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "39px",
              fontWeight: 800,
              fontFamily: "Georgia, serif",
              lineHeight: 1,
            }}
          >
            “
          </div>

          <div>
            <div
              style={{
                color: "#147bb5",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.5px",
                marginBottom: "5px",
              }}
            >
              MESSAGE
            </div>

            <h2
              style={{
                margin: 0,
                color: "#061d3b",
                fontSize: "clamp(21px, 2.3vw, 28px)",
                lineHeight: "1.25",
                fontWeight: 800,
              }}
            >
              A Message of Hope, Resilience, and Commitment
            </h2>
          </div>
        </div>

        {/* =================================================
            FULL MESSAGE
        ================================================= */}
        <div
          style={{
            color: "#244d73",
            fontSize: "16.5px",
            lineHeight: "1.72",
          }}
        >
          <p style={{ margin: "0 0 25px" }}>
            Dear Friends, Partners, and Supporters,
          </p>

          <p style={{ margin: "0 0 25px" }}>
            It is with immense pride and deep gratitude that I address you
            today. Since our humble beginnings in February 2006, the Afghan
            Youth Services Organization (AYSO) has grown from a vision into a
            powerful force for positive change, touching the lives of over 17
            million beneficiaries across all 34 provinces of Afghanistan.
          </p>

          <p style={{ margin: "0 0 25px" }}>
            Our journey has been one of resilience, determination, and
            unwavering commitment to the communities we serve. In a country
            that has faced decades of conflict, displacement, and natural
            disasters, AYSO has remained steadfast in its mission to empower
            individuals, strengthen communities, and build a brighter future
            for all Afghans, regardless of ethnicity, religion, or gender.
          </p>

          <p style={{ margin: "0 0 25px" }}>
            Over the years, we have worked alongside communities to address
            some of the most pressing humanitarian and development challenges.
            Our programs span health, education, nutrition, livelihoods,
            emergency response, protection, and community development.
          </p>

          <p style={{ margin: "0 0 25px" }}>
            At the heart of our work is a simple belief: sustainable change
            begins when communities are empowered to participate in shaping
            their own future. We therefore strive not only to provide
            immediate assistance during times of crisis, but also to create
            opportunities that enable individuals and families to become more
            resilient and self-reliant.
          </p>

          <p style={{ margin: "0 0 25px" }}>
            None of this would be possible without the dedication of our staff,
            the trust of the communities we serve, and the continued support
            of our partners and donors. Their commitment has enabled us to
            reach vulnerable populations in some of the most challenging
            environments across Afghanistan.
          </p>

          <p style={{ margin: "0 0 25px" }}>
            As we look toward the future, our commitment remains stronger than
            ever. We will continue to listen to communities, strengthen our
            partnerships, improve the quality of our programs, and seek
            innovative solutions to emerging humanitarian and development
            needs.
          </p>

          <p style={{ margin: "0 0 25px" }}>
            I am deeply grateful to everyone who has walked alongside AYSO
            throughout this journey. Your confidence in our mission inspires
            us to continue working with integrity, compassion, and
            determination.
          </p>

          <p style={{ margin: 0 }}>
            Together, we can continue building hope, strengthening resilience,
            and creating opportunities for a more peaceful, inclusive, and
            prosperous future for the people of Afghanistan.
          </p>
        </div>

        {/* =================================================
            SIGNATURE
        ================================================= */}
        <div
          style={{
            marginTop: "35px",
            paddingTop: "25px",
            borderTop: "1px solid #dce5ed",
          }}
        >
          <p
            style={{
              margin: "0 0 12px",
              color: "#243f61",
              fontSize: "18px",
              fontStyle: "italic",
            }}
          >
            With gratitude and hope,
          </p>

          <h3
            style={{
              margin: "0 0 6px",
              color: "#061d3b",
              fontSize: "25px",
              fontWeight: 800,
            }}
          >
           Mr. Safeer Ahmad Safi
          </h3>

          <p
            style={{
              margin: "0 0 6px",
              color: "#147bb5",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            General Director and Founder
          </p>

          <a
            href="mailto:general.d@ayso.org"
            style={{
              color: "#147bb5",
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            general.d@ayso.org
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* =====================================================
      RESPONSIVE
  ===================================================== */}
  <style jsx>{`
    .director-stat-icon {
      width: 48px;
      height: 48px;
      min-width: 48px;
      border-radius: 8px;
      background: #2d7eae;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 1000px) {
      .director-main-grid {
        grid-template-columns: 320px minmax(0, 1fr) !important;
        gap: 30px !important;
      }
    }

    @media (max-width: 800px) {
      .director-main-grid {
        grid-template-columns: 1fr !important;
        gap: 28px !important;
      }

      .director-main-grid > div:first-child {
        max-width: 500px;
        width: 100%;
        margin: 0 auto;
      }
    }

    @media (max-width: 600px) {
      .director-main-grid {
        gap: 24px !important;
      }

      .director-main-grid > div:first-child > div:first-child {
        height: 300px !important;
      }

      .director-main-grid > div:first-child > div:last-child {
        padding: 22px 20px !important;
      }

      .director-main-grid > div:last-child {
        padding: 24px 20px !important;
      }

      .director-main-grid > div:last-child > div:first-child {
        gap: 12px !important;
        padding-bottom: 20px !important;
        margin-bottom: 25px !important;
      }

      .director-main-grid > div:last-child > div:first-child > div:first-child {
        width: 45px !important;
        height: 45px !important;
        min-width: 45px !important;
        font-size: 30px !important;
      }
    }

    @media (max-width: 420px) {
      .director-main-grid > div:last-child {
        padding: 20px 16px !important;
      }

      .director-main-grid > div:last-child h2 {
        font-size: 19px !important;
      }

      .director-main-grid > div:last-child > div:last-child {
        font-size: 15px !important;
        line-height: 1.65 !important;
      }
    }
  `}</style>
</section>

      <SiteFooter />
    </>
  );
}