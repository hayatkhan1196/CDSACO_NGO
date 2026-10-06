import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function AboutPage() {
  const sectors = [
    {
      title: "GIRLS EDUCATION",
      icon: "♥",
    },
    {
      title: "WASH & HEALTH",
      icon: "✚",
    },
    {
      title: "VOCATIONAL TRAINING",
      icon: "$",
    },
    {
      title: "AGRICULTURE, LIVESTOCK & LIVELIHOOD",
      icon: "▣",
    },
  ];

  return (
    <>
      <SiteHeader />

      {/* Our Story Section */}
      <section
        style={{
          background: "#fff",
          padding: "40px 20px 50px",
          color: "#173b68",
        }}
      >
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
          }}
        >
          {/* Section Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "25px",
            }}
          >
            <span
              style={{
                width: "64px",
                height: "2px",
                background: "#2d91d0",
                display: "block",
              }}
            />

            <span
              style={{
                background: "#2d86bd",
                color: "#fff",
                padding: "11px 25px",
                borderRadius: "25px",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "0.5px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
              }}
            >
              OUR STORY
            </span>

            <span
              style={{
                width: "64px",
                height: "2px",
                background: "#2d91d0",
                display: "block",
              }}
            />
          </div>

          {/* Heading */}
          <h1
            style={{
              textAlign: "center",
              color: "#2d86bd",
              fontSize: "clamp(42px, 6vw, 72px)",
              lineHeight: "1.1",
              fontWeight: "800",
              margin: "0 0 32px",
            }}
          >
            Introduction
          </h1>

          {/* Content */}
          <div
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#173b68",
              textAlign: "center",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {/* Objectives Section */}
            <section
              style={{
                padding: "60px 20px",
                background: "#f7fafc",
              }}
            >
              <div
                style={{
                  maxWidth: "1000px",
                  margin: "0 auto",
                  textAlign: "center",
                  color: "#173b68",
                  fontSize: "18px",
                  lineHeight: "1.8",
                }}
              >
                <p style={{ marginBottom: "25px" }}>
                  <strong>
                    About Community Development and Social Affairs Charity
                    Organization
                  </strong>
                </p>

                <p style={{ marginBottom: "25px" }}>
                  <strong>CDSACO</strong>
                  <br />
                  is registered with Ministry of Economy of Afghanistan as a
                  Non-for Profit development oriented Afghan Non-Governmental
                  Organization. CDSACO was established by Afghan expert in 27th
                  April, 2002.
                </p>

                <p style={{ marginBottom: "25px" }}>
                  <strong>MISSION</strong>
                  <br />
                  The mission of CDSACO is to promote the basic human rights of
                  women and children, and to contribute to poverty alleviation
                  through provision of basic education, employable skill
                  training, micro / small enterprise and community development
                  training leading to behaviors change, local capacity
                  building, income generation and employment opportunities in a
                  sustainable manner.
                </p>

                <p style={{ marginBottom: "0" }}>
                  <strong>CDSACO’s OBJECTIVES</strong>
                  <br />
                  1. To provide the means for people (male/female) to obtain
                  Basic Education (formal and non-formal) through CDSACO efforts
                  in partnership with donors, government and communities;
                  <br />
                  2. To work with local underserved communities for their
                  development through motivation, mobilization, local resource
                  mobilization, ownership development and capacity building;
                  <br />
                  3. To provide the means for people (male, female) to acquire
                  a vocational technical or other skill facilitated by CDSACO.
                  <br />
                  4. To support, assist or be in any way helpful to an
                  individual or a group of people who are intending to start a
                  business, trade or commercial activities in any way, which is
                  in the mandate of the organization or approved by the Board of
                  Directors.
                  <br />
                  5. To engage in any other development and capacity building
                  activities which are conducive to the uplift of the poorest
                  and neglected sectors of the society;
                  <br />
                  6. To undertake any emergency and relief related activities.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* =====================================================
          OUR GOAL
      ===================================================== */}
      <section
        style={{
          position: "relative",
          minHeight: "385px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",

          backgroundColor: "#2d86bd"
          ,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          color: "#fff",
          padding: "70px 20px",
          boxSizing: "border-box",
        }}
      >
        {/* Diagonal decorative shape */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "300px",
            height: "100%",
            background:
              "linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.10) 48%, rgba(255,255,255,0.10) 72%, transparent 72%)",
            pointerEvents: "none",
          }}
        />

        {/* Goal Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1050px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: "0 0 22px",
              color: "#fff",
              fontSize: "clamp(38px, 5vw, 50px)",
              lineHeight: "1.15",
              fontWeight: "800",
            }}
          >
            Our Goal
          </h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "950px",
              color: "#fff",
              fontSize: "clamp(18px, 2.2vw, 25px)",
              lineHeight: "1.55",
              fontWeight: "600",
            }}
          >
            Our goal is to improve humanitarian services, enhance the state of
            the natural environment, promote the observance of human rights,
            and improve the welfare of disadvantaged populations.
          </p>
        </div>
      </section>
      {/* =====================================================
          SECTORS UNDER FOCUS
      ===================================================== */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#2d86bd",
          backgroundImage:
            "#2d86bd, url('/images/sectors-bg.jpg')",

          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "42px 20px 58px",
        }}
      >
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
          }}
        >
          {/* Section Heading */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "55px",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#fff",
                fontSize: "clamp(36px, 5vw, 48px)",
                fontWeight: "800",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              SECTORS UNDER FOCUS
            </h2>

            {/* Heading underline */}
            <div
              style={{
                width: "155px",
                height: "4px",
                background: "#fff",
                margin: "18px auto 0",
              }}
            />
          </div>

          {/* Sectors Grid */}
          <div className="sectors-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              columnGap: "80px",
              rowGap: "38px",
             
            }}
          >
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="sector-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "28px",
                  minHeight: "100px",
                }}
              >
                {/* Icon */}
                <div className="sector-icon"
                  style={{
                    flex: "0 0 100px",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: "#fff",
                    border: "3px solid #fff",
                    boxShadow:
                      "0 0 0 2px #e3262f, 0 0 0 5px rgba(255,255,255,0.95)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ed1c24",
                    fontSize:
                      index === 1
                        ? "48px"
                        : index === 2
                          ? "48px"
                          : "42px",
                    fontWeight: "700",
                  }}
                >
                  {sector.icon}
                </div>

                {/* Text */}
                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      lineHeight: "1.35",
                      fontWeight: "800",
                      margin: "0 0 9px",
                      textTransform: "uppercase",
                    }}
                  >
                    {sector.title}
                  </h3>

                  {/* Small underline */}
                  <div
                    style={{
                      width: "50px",
                      height: "1px",
                      background: "#fff",
                      marginBottom: "15px",
                    }}
                  />

                  {/* Description placeholder */}
                  <p
                    style={{
                      color: "#fff",
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: "1.5",
                      opacity: 0.95,
                    }}
                  >
                    .
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}