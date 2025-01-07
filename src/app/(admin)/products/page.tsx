import { getProducts } from "./lib/actions";
import PageScreenContent from "./PageScreenContent";

export default async function Products() {
  const { products, error } = await getProducts();
  return <PageScreenContent data={products} error={error} />;
}
