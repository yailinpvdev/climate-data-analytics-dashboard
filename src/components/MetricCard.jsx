function MetricCard({ title, value }) {
  return (
    <div
      style={{
        background: "#f4f4f4",
        padding: "20px",
        borderRadius: "10px",
        width: "150px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      <h4>{title}</h4>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}

export default MetricCard;