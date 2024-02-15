import * as React from "react";
/* Layout */
import Page from "@layouts/Page";
/* Component */
import Hero from "@components/Hero";
/* Image */
import banner from "@images/Banner.png";

const Home = () => {
  return (
    <Page>
      <Hero alt="hello" h1="Cosimo Rhoney" img={banner} />
      <p>Coming soon.</p>
    </Page>
  );
};

export default Home;

export const Head = () => <title>Cosimo Rhoney</title>;
