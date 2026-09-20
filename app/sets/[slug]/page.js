const sets = {
  pink: {
    name: "Pink Inventory",
    price: "2 000 ₽",
    duration: "6 дней",
    image: "/sets/pink/розовый сет.jpg",
    description:
      "Яркий розовый сет для любителей необычного и дорогого инвентаря."
  }
};

export default function SetPage({ params }) {
  const set = sets[params.slug];

  if (!set) {
    return (
      <div style={{ padding: "100px", color: "white" }}>
        Сет не найден
      </div>
    );
  }

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 20px",
        color: "white"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center"
        }}
      >
        <img
          src={set.image}
          alt={set.name}
          style={{
            width: "100%",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.1)"
          }}
        />

        <div>
          <h1
            style={{
              fontSize: "48px",
              marginBottom: "20px"
            }}
          >
            {set.name}
          </h1>

          <p
            style={{
              color: "#9ca3af",
              marginBottom: "30px"
            }}
          >
            {set.description}
          </p>

          <div
            style={{
              fontSize: "40px",
              fontWeight: "700",
              marginBottom: "10px"
            }}
          >
            {set.price}
          </div>

          <div
            style={{
              color: "#00e59b",
              marginBottom: "30px"
            }}
          >
            Аренда на {set.duration}
          </div>

          <a
            href="https://t.me/"
            target="_blank"
            style={{
              display: "inline-block",
              padding: "16px 30px",
              borderRadius: "12px",
              background: "#00e59b",
              color: "#000",
              textDecoration: "none",
              fontWeight: "700"
            }}
          >
            Арендовать через Telegram
          </a>
        </div>
      </div>
    </main>
  );
}
