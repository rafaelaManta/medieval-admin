import { getWaiter } from "@/app/(admin)/waiters/lib/actions";
import EditWaiterContent from "./EditWaiterContent";

export default async function EditWaiter({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const { waiter, error } = await getWaiter(id);

  return <EditWaiterContent data={waiter} error={error} id={id} />;
}
