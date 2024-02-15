import React from "react";
import Footer from "@layouts/Footer.js";
/* CSS */
import "@css/global.css";

const Page = ({ children, className }) => {
  return (
    <>
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
};

export default Page;
