import AboutSection from "./components/About";
import ActionAreas from "./components/ActionAreas";
import BannerSection from "./components/BannerSection";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="">
      <Header />
      <BannerSection />
      <AboutSection />
      <ActionAreas />
      <Services />
      <Contacts />
    </div>
  );
}
