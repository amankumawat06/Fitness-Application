import "./style.css"
import Hero from "./Hero";
import AboutHome from "../about/aboutHome";
import FeaturesHome from "../features/FeaturesHome";
import Plans from "../plans/PlansHome";
import Reviews from "../reviews/ReviewsHome";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutHome />
      <FeaturesHome />
      <Plans />
      <Reviews />
    </>
  );
};

export default HomePage;
