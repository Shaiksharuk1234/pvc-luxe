export default function ProductGrid({ images }) {
  if (!images || images.length === 0) {
    return <p>No designs available</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`design-${index}`}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
      ))}
    </div>
  );
}
