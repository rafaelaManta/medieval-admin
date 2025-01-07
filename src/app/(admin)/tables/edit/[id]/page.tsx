import { getTable } from "@/app/(admin)/tables/lib/actions";
import EditScreenContent from "./EditScreenContent";

export default async function EditTable({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const { table, error } = await getTable(id);

  return <EditScreenContent data={table} error={error} id={id} />;
}
