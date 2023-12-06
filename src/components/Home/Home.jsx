
import BannerHero from "../Banner/BannerHero";
import Adviertisement from "./AdvertisementSection/Adviertisement";
import Review from "../Home/Review";
import ContactUs from "./ContactUs/ContactUs";
import Blog from "./Blog";
import TrustedCompany from "./TrustedCompany";

const Home = () => {
  return (
    <div>
      <BannerHero></BannerHero>
      <Adviertisement></Adviertisement>
      <Review></Review>
      <ContactUs></ContactUs>
      <Blog></Blog>
      <TrustedCompany></TrustedCompany>
    </div>
  );
};

export default Home;
