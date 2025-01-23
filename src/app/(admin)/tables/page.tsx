import { getTables } from "./lib/actions";
import TablesContent from "@/app/(admin)/tables/TablesContent";

export default async function Tables() {
  const { tables, error } = await getTables();
  return <TablesContent data={tables} error={error} />;
}
