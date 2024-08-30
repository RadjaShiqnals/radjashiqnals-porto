// Footer.jsx
// This component renders the footer of the website
import React from 'react';

// This function returns the JSX elements for the footer
function Footer() {
  return (
    // The footer element with a sticky position at the bottom of the page
    <footer className="bg-gray-800 text-white py-4 w-full bottom-0 left-0 sticky">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* The copyright text with the current year */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Radja Genta Saputra. All rights reserved.
        </p>
        {/* // The links to GitHub and the contact email */}
        <div className="mt-2">
          <a href="https://github.com/RadjaShiqnals" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            GitHub
          </a>
          <a href="mailto:radjagentasaputra@gmail.com" className="text-gray-400 hover:text-white mx-2">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

// This line exports the Footer component as the default export
export default Footer;

