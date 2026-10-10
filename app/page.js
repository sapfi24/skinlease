import Hero from "../components/Hero";
import Sets from "../components/Sets";
import Advantages from "../components/Advantages";
import HowItWorks from "../components/HowItWorks";
import Reviews from "../components/Reviews";
import CTA from "../components/CTA";

export const metadata = {
  alternates: {
    canonical: "https://www.skin-lease.ru/",
  },

  openGraph: {
    title: "SkinLease — аренда сетов CS2 без залога",
    description:
      "Аренда готовых сетов CS2 по выгодным ценам. Без залога.",
    url: "https://www.skin-lease.ru/",
    siteName: "SkinLease",
    locale: "ru_RU",
    type: "website",
  },
};

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