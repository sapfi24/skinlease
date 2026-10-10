import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";

export const metadata = {
  metadataBase: new URL("https://www.skin-lease.ru"),

  title: "SkinLease — аренда скинов CS2 без залога",

  description:
    "Аренда скинов и готовых сетов CS2 по выгодным ценам. Без залога.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "SkinLease — аренда скинов CS2 без залога",
    description:
      "Аренда скинов и готовых сетов CS2 по выгодным ценам. Без залога.",
    url: "https://www.skin-lease.ru/",
    siteName: "SkinLease",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <CursorGlow />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}