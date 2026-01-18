import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>PVC LUXE Wall Design Studio</h2>

      <ul style={styles.menu}>
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/category/uv-marble" style={styles.link}>UV Marble</Link>
        </li>
        <li>
          <Link to="/category/pvc-ceiling" style={styles.link}>PVC Ceiling</Link>
        </li>
        <li>
          <Link to="/category/fluted-panel" style={styles.link}>Fluted Panel</Link>
        </li>
        <li>
          <Link to="/category/pvc-louvers" style={styles.link}>WPC Louvers</Link>
        </li>
        <li>
          <Link to="/category/pvc-rafter" style={styles.link}>PVC Rafters</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#111",
    color: "#fff",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    fontSize: "20px"
  },
  menu: {
    display: "flex",
    gap: "20px",
    listStyle: "none"
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "15px"
  }
};
