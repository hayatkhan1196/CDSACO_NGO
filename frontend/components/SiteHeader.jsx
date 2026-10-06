"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
const menuItems = [
  {
    label: "Who We Are",
    dropdown: [
      ["About Us", "/about"],
      // ["Our Leadership", "/leadership"],
      ["Message from Director", "/director"],
      ["Our Policies", "/policies"],
    ],
  },
  {
    label: "What We Do",
    dropdown: [
      ["Our Programs", "/programs"],
      ["Our Projects", "/projects"],
      ["Health", "/programs/health"],
      ["Education", "/programs/education"],
      ["WASH", "/programs/wash"],
      ["Livelihood", "/programs/livelihood"],
    ],
  },
  {
    label: "Donors",
    dropdown: [
      ["Our Donors", "/donors"],
      ["Partners", "/partners"],
      ["Become a Partner", "/contact"],
    ],
  },
  {
    label: "Get Involved",
    dropdown: [
      ["Donate", "/donate"],
      ["Volunteer", "/volunteer"],
      ["Careers", "/careers"],
      ["Contact Us", "/contact"],
    ],
  },
  {
    label: "Latest",
    dropdown: [
      ["News", "/news"],
      ["Stories", "/stories"],
      ["Reports", "/reports"],
      ["Gallery", "/gallery"],
    ],
  },
  {
    label: "Contact Us",
    dropdown: [
      ["Contact Us", "/contact"],
      ["Our Location", "/contact"],
    ],
  },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const closeMenu = () => {
      setOpen(false);
      setActiveDropdown(null);
    };

    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(
      activeDropdown === index ? null : index
    );
  };

  return (
    <header className="site-header">

      <div className="container site-header-inner">

        {/* LOGO */}
        <a
          href="/"
          className="site-brand"
          onClick={() => {
            setOpen(false);
            setActiveDropdown(null);
          }}
        >
          <span className="site-brand-mark">
  <Image
    src="/images/logo.png"
    alt="CDSACO Logo"
    width={48}
    height={48}
    priority
  />
</span>

          <span className="site-brand-text">
            <strong>CDSACO</strong>
            <small>Community Development</small>
          </span>
        </a>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className={`mobile-menu-button ${open ? "is-open" : ""
            }`}
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
          onClick={() => {
            setOpen(!open);
            setActiveDropdown(null);
          }}
        >
          <span />
          <span />
          <span />
        </button>

        {/* NAVIGATION */}
       <nav
  id="site-navigation"
  className={`site-navigation ${open ? "is-open" : ""}`}
>
  <Link
    href="/"
    onClick={() => setOpen(false)}
  >
    Home
  </Link>

  {menuItems.map((item, index) => (
    <div
      className={`nav-dropdown ${
        activeDropdown === index
          ? "dropdown-open"
          : ""
      }`}
      key={item.label}
    >
      <button
        type="button"
        className="nav-dropdown-button"
        onClick={() => toggleDropdown(index)}
      >
        <span>{item.label}</span>

        <span
          className={`dropdown-icon ${
            activeDropdown === index
              ? "arrow-up"
              : ""
          }`}
        />
      </button>

      <div className="dropdown-menu">
        {item.dropdown.map(([label, href]) => (
          <Link
            href={href}
            key={label}
            onClick={() => {
              setOpen(false);
              setActiveDropdown(null);
            }}
          >
            <span className="dropdown-chevron">
              ›
            </span>

            {label}
          </Link>
        ))}
      </div>
    </div>
  ))}
</nav>
      </div>
    </header>
  );
}