import { getProducts } from "./lib/actions";
import ProductsContent from "./ProductsContent";

export default async function Products() {
  const { products, error } = await getProducts();
  return <ProductsContent data={products} error={error} />;
}
