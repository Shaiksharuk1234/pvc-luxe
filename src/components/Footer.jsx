export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* BRAND */}
        <div style={styles.section}>
          <h2 style={styles.brand}>PVC LUXE</h2>
          <p style={styles.subtitle}>Wall Design Studio</p>
          <p style={styles.text}>
            Premium interior solutions with modern designs and quality materials.
          </p>
        </div>

        {/* SERVICES */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Our Services</h3>
          <ul style={styles.list}>
            <li>UV Marble Sheets</li>
            <li>PVC Ceiling</li>
            <li>PVC Rafters</li>
            <li>PU Stone</li>
            <li>Fluted Panels</li>
            <li>Charcoal Louvers</li>
            <li>French Moulding</li>
            <li>Wooden Flooring</li>
            <li>ACP Sheets</li>
            <li>Acrylic Sheets</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.text}>📞 9542551526 / 8639088948</p>
          <p style={styles.text}>📧 pvcluxe.wds@gmail.com</p>
          <p style={styles.text}>
            📍 Kurnool X Road, Aiza, Telangana – 509127
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div style={styles.bottom}>
        <p>
          © {new Date().getFullYear()} PVC LUXE Wall Design Studio | Managing Director: Shaik Azeez Basha
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#111",
    color: "#fff",
    marginTop: "50px"
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    padding: "40px"
  },
  section: {
    lineHeight: "1.7"
  },
  brand: {
    fontSize: "26px",
    marginBottom: "5px",
    color: "#d4af37"
  },
  subtitle: {
    fontSize: "14px",
    letterSpacing: "1px",
    marginBottom: "15px",
    color: "#aaa"
  },
  heading: {
    fontSize: "18px",
    marginBottom: "10px",
    borderBottom: "2px solid #d4af37",
    display: "inline-block",
    paddingBottom: "5px"
  },
  text: {
    fontSize: "14px",
    color: "#ccc"
  },
  list: {
    listStyle: "none",
    padding: 0,
    fontSize: "14px",
    color: "#ccc"
  },
  bottom: {
    background: "#000",
    textAlign: "center",
    padding: "15px",
    fontSize: "13px",
    color: "#aaa"
  }
};
