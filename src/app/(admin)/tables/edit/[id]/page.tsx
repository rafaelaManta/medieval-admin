import { getTable } from "@/app/(admin)/tables/lib/actions";
import EditTableContent from "./EditTableContent";

export default async function EditTable({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const { table, error } = await getTable(id);

  return <EditTableContent data={table} error={error} id={id} />;
}
