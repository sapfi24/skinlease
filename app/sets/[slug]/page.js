import sets from "../../../data/sets";

export default async function SetPage({ params }) {
  const { slug } = await params;

  const set = sets.find(item => item.slug === slug);

  if (!set) {
    return (
      <div style={{ color: "white", padding: "100px" }}>
        Сет не найден: {slug}
      </div>
    );
  }

  return (
    <div style={{ color: "white", padding: "100px" }}>
      <h1>{set.name}</h1>

      <p>{set.description}</p>

      <p>{set.price}</p>

      <p>{set.duration}</p>

      <img
        src={set.images[0]}
        alt={set.name}
        style={{
          width: "500px",
          borderRadius: "20px"
        }}
      />
    </div>
  );
}
