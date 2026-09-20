export default function Hero() {
  return (
    <section
      style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        position: "relative"
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          padding: "0 24px"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: "60px",
            alignItems: "center"
          }}
        >
          <div>
            <div
              style={{
                color: "#00D084",
                fontWeight: 700,
                marginBottom: "18px",
                letterSpacing: "2px"
              }}
            >
              SKINLEASE
            </div>

            <h1
              style={{
                fontSize: "78px",
                lineHeight: ".95",
                margin: 0,
                marginBottom: "24px"
              }}
            >
              Аренда готовых
              <br />
              инвентарей CS2
            </h1>

            <p
              style={{
                color: "#9AA4B2",
                fontSize: "22px",
                maxWidth: "620px",
                marginBottom: "36px"
              }}
            >
              Красивые тематические сеты без покупки
              инвентаря за полную стоимость.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "50px"
              }}
            >
              <a
                href="#sets"
                style={{
                  background: "#00D084",
                  color: "#000",
                  textDecoration: "none",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  fontWeight: 700
                }}
              >
                Посмотреть сеты
              </a>

              <a
                href="https://t.me/USERNAME"
                style={{
                  border: "1px solid #273142",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "16px 28px",
                  borderRadius: "14px"
                }}
              >
                Telegram
              </a>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px"
              }}
            >
              {[
                "🌸 Pink Inventory",
                "💜 Purple Inventory",
                "🔥 Red Inventory",
                "💎 Ice Inventory"
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#12161F",
                    border: "1px solid #1F2633",
                    padding: "12px 16px",
                    borderRadius: "12px"
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                background:
                  "linear-gradient(145deg,#12161F,#1A2230)",
                border: "1px solid #1F2633",
                borderRadius: "30px",
                padding: "30px",
                height: "620px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div
                  style={{
                    color: "#00D084",
                    marginBottom: "10px"
                  }}
                >
                  ТОП СЕТ
                </div>

                <h3
                  style={{
                    fontSize: "34px",
                    margin: 0
                  }}
                >
                  Pink Inventory
                </h3>
              </div>

              <div
                style={{
                  textAlign: "center",
                  fontSize: "140px"
                }}
              >
                🌸
              </div>

              <div>
                <div
                  style={{
                    color: "#9AA4B2",
                    marginBottom: "8px"
                  }}
                >
                  Аренда от
                </div>

                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: 700
                  }}
                >
                  2 000 ₽
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}