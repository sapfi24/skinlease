export const metadata = {
  title: "SkinLease",
  description: "Аренда скинов CS2"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        style={{
          margin: 0,
          background: "#090B10",
          color: "#fff",
          fontFamily: "Arial, sans-serif"
        }}
      >
        {children}
      </body>
    </html>
  );
}