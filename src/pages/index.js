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
      <Hero
        alt="hello"
        video={
          "https://res.cloudinary.com/debrk3xwf/video/upload/v1754179784/cosimo-rhoney-hero-background-home_st8uhe.mp4"
        }
      />
      <section>
        <h1 className="title-sm flush-next">Cosimo Rhoney Productions</h1>
        <h2 className="title-lg flush-next">
          FILMMAKER | PHOTOGRAPHER | MUSICIAN
        </h2>
        <h3 className="title-md">ABOUT</h3>
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
          and I plan to make a strong impact with my art and beyond. Me on
          LinkedIn Me on YouTube MOVIES IN THE MAKING PROJECTS TITLE: The First
          Surge STATUS: In Progress GENRE: Sci-fi, Fantasy DESCRIPTION With a
          targeted 7min of runtime, this may be my longest film endeavor with
          the most preparation needed in props, costumes, scripting and more. I
          plan to execute this project using as much of my own content as
          possible, meaning ideally no stock photos and minimal sound fx and
          music. As I work on the script, I have been composing my own score for
          the film and listening to it for inspiration. The story-line continues
          to follow the main character in “Voice of the Earth”, a 3min short
          film on my YouTube channel. It tells the story of when a threatening
          group of outsiders come steal resources from her land. In the original
          film, almost all effects were applied digitally in post-production. In
          this project I am striving to accomplish as many practical effects as
          possible, including the glowing effect on the ground and using many
          props to put viewers into the sci-fi/fantasy world and convincingly
          tell the story. Be sure to check out the original film on my channel
          to preview the tone of this film, and subscribe to be notified when it
          is released. ©2025 Cosimo Rhoney.{" "}
        </p>
        <p>
          <a
            href="https://linkedin.com/in/cosimorhoney"
            target="_blank"
            rel="noreferrer"
          >
            Me on Linkedin
          </a>
        </p>
        <p>
          {" "}
          <a
            href="https://www.youtube.com/@cosimorhoneyproductions"
            target="_blank"
            rel="noreferrer"
          >
            Me on YouTube
          </a>
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TTwcOrf3BE0?si=RsvfPre8Mqcxjx8h&amp;controls=0&rel=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="aspect-32-9"
        ></iframe>
      </section>
    </Page>
  );
};

export default Home;

export const Head = () => <title>Cosimo Rhoney</title>;
