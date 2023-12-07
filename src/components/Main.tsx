import "./Main.css";
import Elana from "../assets/Elana.jpg";
import Footer from "./Footer";

const Main = () => {
  return (
    <section className="Main">
      <div className="top-section">
        <div className="about-book">
          <p>
            For the Love of Dirt follows Elaina, an eight-year-old girl who is
            bored on the first day of summer vacation. After seeking advice from
            her neighboring grandparents, Edlaina begins growing a flower garden
            in her front yard. Misunderstandings brew, however, as Edlaina's
            younger twin brothers start to think their sister is paying more
            attention to her garden, rather than spending time with them. After
            verbally and physically expressing their feelings, the children
            learn there are positive and negative ways to show familial love
            towards each other.
          </p>
          <br />
          <p>
            Because of its simplistic language and whimsical illustrations, For
            the Love of Dirt is geared towards elementary school-aged children.
            However, readers of all ages can take away from the story's message
            of remembering and understanding other people's points of view.
          </p>
        </div>
        <img src={Elana} alt="Elana" />
      </div>
      <div className="middle-section">
        <h3 className="about-header">About the book</h3>
        <div className="about-section-container">
          <div className="about-details">
            <p className="top-border">Length</p> <p>42 pages</p>
          </div>
          <div className="about-details">
            <p className="top-border">Language</p> <p>English</p>
          </div>
          <div className="about-details">
            <p className="top-border">Grade Level</p> <p>Kindergarden</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Main;
