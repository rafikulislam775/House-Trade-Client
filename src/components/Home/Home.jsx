
import BannerHero from "../Banner/BannerHero";
import Adviertisement from "./AdvertisementSection/Adviertisement";
import Review from "../Home/Review";
import ContactUs from "./ContactUs/ContactUs";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <BannerHero></BannerHero>
      <Adviertisement></Adviertisement>
      <Review></Review>
      <ContactUs></ContactUs>
      <Blog></Blog>
    </div>
  );
};

export default Home;
