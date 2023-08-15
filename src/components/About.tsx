import "./About.css";
import author from "../assets/JillD.jpeg";

const About = () => {
  return (
    <div className="About">
      <h2>About Jill Dudek</h2>
      <div className="split-here">
        <div className="author-side">
          <img src={author} alt="author" />
        </div>
        <div className="about-side">
          <p>
            Jill is an author from Metro Detroit and mother of two who enjoys
            sharing happiness and positivity with those around her. She is the
            person who says “hello” to you when crossing paths at the grocery
            store. She gives sincere compliments when out with family or
            friends. She is the person you turn to for advice when you’re having
            any kind of trouble. Jill’s upbeat attitude and lifestyle resonate
            through her illustrative stories for children.
            <br />
            <br />
            Jill’s work is specifically designed for elementary school readers,
            but children of all ages can appreciate the relatable situations
            that may come across when growing up…and the amusing solutions that
            follow!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
