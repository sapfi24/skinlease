const sets = [
  {
    name: "Pink Inventory",
    price: "2 000 ₽"
  },
  {
    name: "Purple Inventory",
    price: "2 500 ₽"
  },
  {
    name: "Red Inventory",
    price: "3 000 ₽"
  },
  {
    name: "Ice Inventory",
    price: "2 700 ₽"
  }
];

export default function Sets() {
  return (
    <section
      id="sets"
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "100px 24px"
      }}
    >
      <h2
        style={{
          fontSize: "52px",
          marginBottom: "50px"
        }}
      >
        Популярные сеты
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px"
        }}
      >
        {sets.map((set) => (
          <div
            key={set.name}
            style={{
              background: "#12161F",
              border: "1px solid #1F2633",
              borderRadius: "20px",
              padding: "24px"
            }}
          >
            <div
              style={{
                fontSize: "64px",
                marginBottom: "20px"
              }}
            >
              🎮
            </div>

            <h3>{set.name}</h3>

            <p
              style={{
                color: "#9AA4B2"
              }}
            >
              от {set.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}