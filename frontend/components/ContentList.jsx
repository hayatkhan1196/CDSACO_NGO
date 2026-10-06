"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const API = (
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"
).replace(/\/$/, "");

export default function ContentList({ type, title, intro }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Slider reference
  const sliderRef = useRef(null);

  useEffect(() => {
    console.log("Fetching:", `${API}/content/${type}`);

    fetch(`${API}/content/${type}`)
      .then((r) => {
        if (!r.ok) {
          throw new Error(`API error: ${r.status}`);
        }

        return r.json();
      })
      .then((data) => {
        console.log("API response:", data);
        console.log("Items:", data.items);

        setItems(data.items || []);
      })
      .catch((error) => {
        console.error("Content fetch error:", error);
        setItems([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [type]);

  /*
   * Move slider left/right
   */
  const moveSlider = (direction) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.querySelector(".content-slider-card");

    if (!card) return;

    const cardWidth = card.offsetWidth + 20;

    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (direction === "next") {
      if (slider.scrollLeft + cardWidth >= maxScroll - 10) {
        // Go back to beginning
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    } else {
      if (slider.scrollLeft <= 10) {
        // Go to end
        slider.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: -cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  /*
   * Automatic slider
   */
  useEffect(() => {
    if (items.length <= 1) return;

    const interval = setInterval(() => {
      moveSlider("next");
    }, 4000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <section
      className="container content-list-page"
      style={{
        paddingTop: 56,
        paddingBottom: 70,
      }}
    >
      {/* PAGE HEADER */}
      <p
        style={{
          color: "#47745c",
          fontWeight: 800,
          letterSpacing: 2,
          textTransform: "uppercase",
          fontSize: 12,
        }}
      >
        CDSACO / {type}
      </p>

      <h1
        style={{
          fontSize: "clamp(34px, 5vw, 52px)",
          color: "#164e3b",
          margin: "12px 0",
        }}
      >
        {title}
      </h1>

      <p
        className="muted"
        style={{
          maxWidth: 700,
          lineHeight: 1.8,
        }}
      >
        {intro}
      </p>

      {/* LOADING */}
      {loading ? (
        <p style={{ marginTop: 30 }}>
          Loading content…
        </p>
      ) : items.length === 0 ? (
        /* EMPTY */
        <div
          className="card"
          style={{
            marginTop: 28,
            padding: 30,
          }}
        >
          <h3>Content coming soon</h3>

          <p className="muted">
            Published content added by your website administrator
            will appear here.
          </p>
        </div>
      ) : (
        /* SLIDER */
        <div
          className="content-slider-wrap"
          style={{
            position: "relative",
            marginTop: 30,
          }}
        >
          {/* LEFT BUTTON */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={() => moveSlider("prev")}
              aria-label="Previous"
              style={{
                position: "absolute",
                left: -18,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: 46,
                height: 46,
                borderRadius: "50%",
                border: "none",
                background: "#164e3b",
                color: "#fff",
                fontSize: 28,
                lineHeight: 1,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 5px 18px rgba(0,0,0,.18)",
              }}
            >
              ‹
            </button>
          )}

          {/* SLIDER WINDOW */}
          <div
            ref={sliderRef}
            className="content-slider"
            style={{
              display: "flex",
              gap: 20,
              overflowX: "auto",
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              padding: "5px 5px 20px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {items.map((item) => {
              console.log("ITEM:", item);

              return (
                <article
                  key={item._id}
                  className="card content-slider-card"
                  style={{
                    flex: "0 0 calc((100% - 40px) / 3)",
                    minWidth: 0,
                    scrollSnapAlign: "start",
                    overflow: "hidden",
                    padding: 20,
                    boxSizing: "border-box",
                  }}
                >
                  {/* IMAGE */}
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title || ""}
                      style={{
                        width: "100%",
                        height: 190,
                        objectFit: "cover",
                        borderRadius: 12,
                        marginBottom: 16,
                        display: "block",
                      }}
                    />
                  )}

                  {/* CATEGORY */}
                  <p
                    style={{
                      color: "#47745c",
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      margin: "0 0 8px",
                    }}
                  >
                    {item.category || type}
                  </p>

                  {/* TITLE */}
                  <h2
                    style={{
                      color: "#164e3b",
                      fontSize: 22,
                      margin: "0 0 10px",
                    }}
                  >
                    {item.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p
                    className="muted"
                    style={{
                      lineHeight: 1.7,
                      margin: "0 0 8px",

                      /* Show only 3 lines */
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.summary || item.body}
                  </p>

                  {/* READ MORE */}
                  <Link
                    href={`/projects/${item._id}`}
                    style={{
                      display: "inline-block",
                      color: "#176b52",
                      fontSize: 15,
                      fontWeight: 700,
                      textDecoration: "none",
                      marginBottom: 18,
                    }}
                  >
                    Read More ...
                  </Link>

                  {/* FILE */}
                  {item.fileUrl && (
                    <a
                      className="btn btn-dark"
                      href={item.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open file
                    </a>
                  )}
                </article>
              );
            })}
          </div>

          {/* RIGHT BUTTON */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={() => moveSlider("next")}
              aria-label="Next"
              style={{
                position: "absolute",
                right: -18,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: 46,
                height: 46,
                borderRadius: "50%",
                border: "none",
                background: "#164e3b",
                color: "#fff",
                fontSize: 28,
                lineHeight: 1,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 5px 18px rgba(0,0,0,.18)",
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </section>
  );
}