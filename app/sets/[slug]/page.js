export default function SetPage({ params }) {
  return (
    <div style={{ color: "white", padding: "100px" }}>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}
