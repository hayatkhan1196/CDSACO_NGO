
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContentList from "../components/ContentList";

const cards = [
  ["Our Programs", "Community-led initiatives that respond to local needs.", "/programs"],
  ["Our Projects", "Explore projects, locations and implementation updates.", "/projects"],
  ["News & Stories", "Read the latest updates and community stories.", "/news"],
  ["Reports & Resources", "Find publications, reports and useful documents.", "/reports"]
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
       <section
  className="home-hero"
  style={{
    position: "relative",
    minHeight: "550px",
    display: "flex",
    alignItems: "center",
    color: "white",
    backgroundImage: "url('/images/slide1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  }}
>
  {/* Dark overlay */}
  <div
    className="home-hero-overlay"
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.58) 48%, rgba(0,0,0,.20) 100%)",
    }}
  />

  {/* Hero content */}
  <div
    className="container home-hero-content"
    style={{
      position: "relative",
      zIndex: 1,
      width: "100%",
      padding: "75px 0",
    }}
  >
    <div className="home-hero-text">
      {/* Badge */}
      <div className="home-hero-badge">
        Primary Health Care
      </div>

      {/* Heading */}
      <h1 className="home-hero-title">
        Primary Health Care
        <br />
        for Every Community
      </h1>

      {/* Description */}
      <p className="home-hero-description">
        Through PHC, AYSO brings essential health services closer to
        home—preventive care, maternal and child support, and skilled
        treatment—so families across Afghanistan can live healthier
        lives.
      </p>

      {/* Buttons */}
      <div className="home-hero-buttons">
        <a href="/donate" className="home-hero-btn home-hero-btn-primary">
          Donate Now
        </a>

        <a href="/programs" className="home-hero-btn home-hero-btn-secondary">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

        {/* ABOUT / OUR STORY */}
        {<section
          className="container home-about-section"
          style={{
            padding: "75px 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 55,
            alignItems: "center",
          }}
        >
          {/* LEFT CONTENT */}
          <div>
            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 52px)",
                lineHeight: 1.08,
                letterSpacing: "-1.5px",
                color: "#071b36",
                margin: "0 0 28px",
                fontWeight: 800,
              }}
            >
              Building a Better Future
              <br />
              for Children Across
              <br />
              Afghanistan
            </h2>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.65,
                color: "#31506f",
                margin: "0 0 22px",
              }}
            >
              Since our founding in 2006, we have been at the forefront of
              creating positive change for children and families across
              Afghanistan. Our mission is simple yet powerful: ensure every
              child has the opportunity to thrive, learn, and reach their full
              potential.
            </p>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.65,
                color: "#31506f",
                margin: "0 0 22px",
              }}
            >
              We work across all 34 provinces of Afghanistan, reaching
              children who need us most. Through innovative programs in
              education, health, child protection, and emergency response,
              we're making a lasting difference in the lives of Afghan
              children and families.
            </p>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.65,
                color: "#31506f",
                margin: 0,
              }}
            >
              Our approach is collaborative, working hand-in-hand with local
              communities, government institutions, and international partners
              to create sustainable solutions that address the root causes of
              poverty and inequality in Afghanistan.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            style={{
              position: "relative",
              minHeight: 520,
              borderRadius: 18,
              overflow: "visible",
            }}
          >
            <img
              src="/images/gallery1.jpg"
              alt="Community work in Afghanistan"
              style={{
                width: "100%",
                height: "520px",
                objectFit: "cover",
                borderRadius: 18,
                display: "block",
              }}
            />

            {/* TOP RATED BADGE */}
            <div
              style={{
                position: "absolute",
                top: -25,
                right: -20,
                background: "#fff",
                borderRadius: 18,
                padding: "22px 28px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                boxShadow: "0 8px 30px rgba(0,0,0,.12)",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  background: "#e1f2ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2d91d1",
                  fontSize: 28,
                }}
              >
                ★
              </div>

              <div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#071b36",
                  }}
                >
                  Top Rated
                </div>

                <div
                  style={{
                    fontSize: 14,
                    color: "#52677d",
                    marginTop: 3,
                  }}
                >
                  Charity Navigator
                </div>
              </div>
            </div>

            {/* OUR JOURNEY CARD */}
            <div
              style={{
                position: "absolute",
                left: 32,
                right: 32,
                bottom: 25,
                background: "rgba(255,255,255,.97)",
                borderRadius: 15,
                padding: "24px 28px",
                boxShadow: "0 10px 35px rgba(0,0,0,.15)",
                zIndex: 2,
              }}
            >
              <h3
                style={{
                  margin: "0 0 18px",
                  color: "#071b36",
                  fontSize: 24,
                  fontWeight: 800,
                }}
              >
                Our Journey
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    color: "#334960",
                    fontSize: 16,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      minWidth: 8,
                      borderRadius: "50%",
                      background: "#2d91d1",
                    }}
                  />

                  <span>
                    <strong>2006:</strong> Founded in Kabul
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    color: "#334960",
                    fontSize: 16,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      minWidth: 8,
                      borderRadius: "50%",
                      background: "#2d91d1",
                    }}
                  />

                  <span>
                    <strong>2010s:</strong> Expanded across provinces
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    color: "#334960",
                    fontSize: 16,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      minWidth: 8,
                      borderRadius: "50%",
                      background: "#2d91d1",
                    }}
                  />

                  <span>
                    <strong>Today:</strong> Serving all 34 provinces
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        }

        <section>           <ContentList type="projects" title="Our Projects" intro="Explore projects, locations, partners and implementation updates." />
        </section>
        {/* JOIN OUR MISSION */}
<section className="join-mission-section">
  <div className="join-mission-content">

    <h2>Join Our Mission</h2>

    <p>
      Together, we can create a brighter future for children and communities
      across Afghanistan
    </p>

    <div className="join-mission-buttons">

      <a
        href="/donate"
        className="join-mission-primary-btn"
      >
        Donate Now
      </a>

      <a
        href="/contact"
        className="join-mission-secondary-btn"
      >
        Contact Us
      </a>

    </div>
  </div>
</section>
        {/* CONTACT CTA */}
        <section
          className="container"
          style={{
            marginTop: 20,
            marginBottom: 70,
            background: "#e7edda",
            padding: "38px 30px",
            borderRadius: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2
              style={{
                color: "#164e3b",
                fontSize: 30,
                margin: "0 0 8px",
              }}
            >
              Want to work with us?
            </h2>

            <p className="muted">
              Connect with our team to learn more about our work.
            </p>
          </div>

          <a className="btn btn-dark" href="/contact">
            Get in touch ↗
          </a>
        </section>

      </main>



      <SiteFooter />
    </>
  );
}