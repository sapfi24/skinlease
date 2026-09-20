import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";

export const metadata = {
  title: "SkinLease — аренда сетов CS2 без залога",
  description:
    "Аренда готовых сетов CS2 по выгодным ценам. Без залога.",
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
