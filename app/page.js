import Hero from "../components/Hero";
import Sets from "../components/Sets";
import Advantages from "../components/Advantages";
import HowItWorks from "../components/HowItWorks";
import Reviews from "../components/Reviews";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <div className="site-background" />

      <main>
        <Hero />
        <Sets />
        <Advantages />
        <HowItWorks />
        <Reviews limit={3} />
        <CTA />
      </main>
    </>
  );
}