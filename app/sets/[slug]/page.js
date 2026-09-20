export default function SetPage({ params }) {
  return (
    <div style={{ padding: "100px" }}>
      <h1>Сет: {params.slug}</h1>
    </div>
  );
}
