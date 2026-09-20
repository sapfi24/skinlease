export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 24px"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "60px"
        }}
      >
        <div>
          <div
            style={{
              color: "#00D084",
              marginBottom: "12px",
              fontWeight: "bold"
            }}
          >
            SKINLEASE
          </div>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.05",
              margin: "0 0 24px"
            }}
          >
            Аренда премиальных скинов CS2
          </h1>

          <p
            style={{
              color: "#9AA4B2",
              fontSize: "20px",
              marginBottom: "32px"
            }}
          >
            Получите желаемый инвентарь без необходимости покупать его за полную стоимость.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px"
            }}
          >
            <a
              href="#inventory"
              style={{
                background: "#00D084",
                color: "#000",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: "12px",
                fontWeight: "bold"
              }}
            >
              Инвентарь
            </a>

            <a
              href="https://t.me/USERNAME"
              style={{
                border: "1px solid #2A3240",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: "12px"
              }}
            >
              Telegram
            </a>
          </div>
        </div>

        <div
          style={{
            height: "500px",
            borderRadius: "24px",
            background:
              "linear-gradient(135deg,#12161F,#1B2330)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            color: "#00D084"
          }}
        >
          KNIFE IMAGE
        </div>
      </div>
    </main>
  );
}