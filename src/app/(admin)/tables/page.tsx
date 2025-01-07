import { getTables } from "./lib/actions";
import PageScreenContent from "@/app/(admin)/tables/PageScreenContent";

export default async function Tables() {
  const { tables, error } = await getTables();
  return <PageScreenContent data={tables} error={error} />;
}
