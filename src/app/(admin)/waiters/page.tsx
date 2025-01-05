import { Table, Template } from "@/components";
import { literals } from "@/lib/literals";
import { getWaiters } from "./actions";
import { waitersColumns } from "./config";

export default async function Waiters() {
  const waiters = await getWaiters();

  return (
    <Template
      createButtonProps={{
        path: "/waiters/create",
        text: literals.createWaiterButtonText,
      }}
    >
      <Table
        tableData={{ columns: waitersColumns, data: waiters }}
        deleteButtonPressAction={async () => {
          "use server";
        }}
      />
    </Template>
  );
}
