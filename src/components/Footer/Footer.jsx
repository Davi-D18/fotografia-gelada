import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="footer">
      <h1 className="logo">FOTOGRAFIA GELADA</h1>
      <div className="social-icons">
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
        <FaTiktok />
      </div>
      <p>Copyright 2024</p>
    </footer>
  );
}
