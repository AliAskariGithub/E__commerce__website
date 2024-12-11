import Arrivals from "@/components/Arrivals";
import DressStyle from "@/components/DressStyle";
import Hero from "@/components/Hero";
import OnSale from "@/components/OnSale";
import Testimonial from "@/components/Testimonial";
import TopSellling from "@/components/TopSellling";

export default function Home() {
  return (
    <div>
      <Hero />
      <OnSale />
      <Arrivals />
      <TopSellling />
      <DressStyle />
      <Testimonial />
    </div>
  );
}
