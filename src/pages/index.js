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
      <section>
        <h2>About</h2>
        <p>
          My name is Cosimo Rhoney and I am a photographer and videographer. My
          interest in film began when I was around 6-8 and was making short home
          movies with my sister and friends for fun. A few years later, I
          purchased an action camera and then a professional video drone a bit
          after that. These were fun to use, but I really didn't know what I was
          missing out on till I got a traditional camera. I had tons of fun
          learning and practicing photography with it. I carried it everywhere
          and took lots of photos all the time. After a while, I decided to
          start selling, so I put up photography prints for sale online and
          started offering my photography as a service. That was the beginning
          of Cosimo Rhoney Productions (Cosimo Rhoney Photo). Eventually I
          started making sales and finding clients. I continued learning and
          practicing and began producing income. I then decided to explore
          videography more to expand my services and produce more content.
          Currently, I offer both photography and videography service. You can
          contact me on{" "}
          <a href="https://linkedin.com/in/cosimorhoney" target="_blank">
            Linkedin
          </a>
          . If you are interested in seeing and/or purchasing my photography
          work, you can find it at{" "}
          <a href="https://fineartamerica.com/profiles/cosimo-rhoney">
            Fine Art America
          </a>
          . To see video content and animation, you can check me out on{" "}
          <a href="https://www.youtube.com/@cosimorhoneyproductions">
            YouTube @cosimorhoneyproductions
          </a>
          .
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
