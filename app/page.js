import Toolbar from "./components/toolbar";
import Menu from "./components/menu";
import Services from "./components/services";
import Offer from "./components/offer";
import Slider from "./components/slider";
import Banner1 from "./components/banner1";
import BestSells from "./components/best-sell";
import Banner2 from "./components/banner2";
import AppleWatch from "./components/apple-watch";
import Footer from "./components/footer";
import BottomNav from "./components/bottomnav";

export default function Home() {
  return (
    <>
      <Toolbar />
      <Menu />
      <Slider />
      <Offer />
      <BestSells />

      <Banner1 />
      <AppleWatch />
      <Banner2 />
      <Services />
      <BottomNav/>
      <Footer />
    </>
  );
}
