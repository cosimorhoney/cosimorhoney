import * as React from "react";
/* Layout */
import Page from "@layouts/Page";
/* Component */
import Hero from "@components/Hero";
/* Image */
import banner from "@images/Banner.webp";

const Home = () => {
  return (
    <Page>
      <Hero alt="hello" h1="Cosimo Rhoney" img={banner} />
      <section>
        <h2>About</h2>
        <p>
          Filmmaking has been a long lasting passion of mine, all the way back
          to the home movies made on my dad's old phone. I now see film as a way
          to communicate artistic messages with emotions and atmospheres,
          whether set in otherworldly places or in day to day life. It's also a
          way for me to inspire others to be creative as well. My experience and
          skills have grown rapidly, not only learning the principles that make
          a good image, but gaining an understanding of many aspects of the
          movie production such as story structure, music composition, audio,
          etc. I apply these skills as best I can in my short films posted on my
          YouTube channel and I am always expanding in my education and
          portfolio through these films. I have extensive goals in this industry
          and I plan to make a strong impact with my art and beyond.
        </p>
        <p>
          <a
            href="https://www.youtube.com/@cosimorhoneyproductions"
            target="_blank"
            rel="noreferrer"
          >
            Cosimo Rhoney on YouTube
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/cosimorhoney"
            target="_blank"
            rel="noreferrer"
          >
            Cosimo Rhoney on LinkedIn
          </a>
        </p>
        {/* <h2>Cosimo Rhoney Productions Team</h2>
        <p>
          Along with the business side of things, I have been working on small
          film projects to practice my skills. I have mainly been working on my
          own, but sometimes this can be a challenge (it's not always easy to be
          the actor and the camera man at the same time). If you are at the
          beginning of your film journey, you may be interested in joining the
          Cosimo Rhoney Productions team. Having a group will allow us to learn
          more, do more and create more than we could alone.
        </p>
        <p>
          There are an enormous number of roles in a movie production ranging
          from writing to filming to delivering pizza to the crew (although
          Cosimo Rhoney Productions isn't looking for a pizza delivery guy).
        </p>
        <p>
          The team is small now, but the only way for it to grow is for more
          people to join! Feel free to{" "}
          <a href="mailto:crphoto@proton.me">shoot me an email</a>.
        </p> */}
      </section>
    </Page>
  );
};

export default Home;

export const Head = () => <title>Cosimo Rhoney</title>;
