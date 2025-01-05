import { Table, Template } from "@/components";
import { literals } from "@/lib/literals";
import { getTables } from "./actions";
import { tablesColumns } from "./config";

export default async function Tables() {
  const tables = await getTables();

  return (
    <Template
      createButtonProps={{
        path: "/tables/create",
        text: literals.createTableButtonText,
      }}
    >
      <Table
        tableData={{ columns: tablesColumns, data: tables }}
        deleteButtonPressAction={async () => {
          "use server";
        }}
      />
    </Template>
  );
}
