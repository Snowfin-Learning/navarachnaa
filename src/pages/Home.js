import {
  useState,
  useEffect,
  // useContext
} from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
// import ModelContext from "../context/ModelContext";
import Destinations from "../components/Destinations";
import Services from "../components/services/Services";
// import Reviews from "../components/reviews/Reviews";
import GalleryComponent from "../components/gallery/GalleryComponent";
import Footer from "../components/footer/Footer";
const Home = () => {
  // const { dispatch } = useContext(ModelContext);
  const [state] = useState({
    heading: "WHY NAVRACHNAA",
    paragraph: `The doers are the major thinkers.
    The people that really create the
     things that `,
    subparagraph: `change this industry
    are both the thinkers and doers 
    in the same person.`,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Navarachnaa</title>
        <meta name="description" content="A Step towards innovation" />
      </Helmet>
      <Header
        heading={state.heading}
        paragraph={state.paragraph}
        subparagraph={state.subparagraph}
      >
        <a href="https://bit.ly/3J3gXDv">
          <button className="btn-default">Register</button>
        </a>
      </Header>
      <Destinations />
      <Services />
      {/* <Reviews /> */}
      <GalleryComponent />
      <Footer />
    </>
  );
};
export default Home;
