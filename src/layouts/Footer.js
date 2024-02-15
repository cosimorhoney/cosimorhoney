import React from "react";
import "@css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <p className="copyright">
          &copy;{new Date().getFullYear()} Cosimo Rhoney.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
