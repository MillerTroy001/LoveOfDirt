import "./Main.css";
import Elana from "../assets/Elana.jpg";
import Footer from "./Footer";

const Main = () => {
  return (
    <section className="Main">
      <div className="top-section">
        <img src={Elana} alt="Elana" />
        <div className="about-book">
          <p>
            For the Love of Dirt follows Edlaina, an eight-year-old girl who is
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
      </div>
      <div className="middle-section">About the book</div>
      <Footer />
    </section>
  );
};

export default Main;
