import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="navbar">
      <div className="navbar-border">
        <Link href="/" legacyBehavior passHref>
          <div className="navbar-title-container">
            <h1>Bob Reuter Photo Archive</h1>
          </div>
        </Link>
        <div>
          <div className={`mobile-menu ${showMobileMenu ? "show" : ""}`}>
            <Link href="/about" legacyBehavior passHref>
              <a>About</a>
            </Link>
            <a href="https://collections.shsmo.org/manuscripts/saint-louis/s0368">
              Official Archive at UMSL
            </a>
          </div>
          <button className="hamburger" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </div>
    </div>
  );
}
