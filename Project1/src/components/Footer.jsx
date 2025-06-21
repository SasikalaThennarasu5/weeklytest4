// components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
