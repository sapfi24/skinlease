import "./globals.css";

export const metadata = {
  title: "SkinLease — Аренда сетов CS2",
  description: "Аренда готовых инвентарей CS2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
