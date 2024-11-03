import DescriptionSection from "../DescriptionSection/DescriptionSection";
import FAQ from "../FAQ/FAQ";
import HeroSection from "../HeroSection/HeroSection";
import ServicesGrid from "../ServiceGrid/ServiceGrid";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <DescriptionSection></DescriptionSection>
      <ServicesGrid></ServicesGrid>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
