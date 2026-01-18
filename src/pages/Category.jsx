import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function Category() {
  const { slug } = useParams();

  const category = products.find(p => p.slug === slug);

  if (!category) {
    return <h2 style={{ padding: "40px" }}>Category not found</h2>;
  }

  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <h1>{category.name}</h1>
      <ProductGrid images={category.designs} />
    </div>
  );
}
