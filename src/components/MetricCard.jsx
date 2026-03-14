function MetricCard({ title, value }) {
  return (
    <div
      style={{
        background: "#f4f4f4",
        padding: "25px",
        borderRadius: "12px",
        width: "180px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "transform 0.2s"
      }}
    >
      <h4 style={{ marginBottom: "10px", color: "#555" }}>
        {title}
      </h4>

      <p
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          color: "#333"
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default MetricCard;