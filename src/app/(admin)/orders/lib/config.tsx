import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { literals } from "@/lib/literals";

export const orderColumns: ColumnDef<
  {
    id: number;
    table: { id: number; title: string; order: number };
    waiter: { id: number; name: string };
    completed: boolean;
    total: number;
  },
  any
>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "table",
    header: literals.tableText,
    accessorFn: (row) => row.table.title,
  },
  {
    accessorKey: "waiter",
    header: literals.waitressText,
    accessorFn: (row) => row.waiter.name,
  },
  {
    accessorKey: "completed",
    header: literals.completedText,
    meta: { className: "text-center", headerClassName: "text-center" },
    cell: (item) => {
      return <Checkbox checked={item.getValue()} disabled />;
    },
  },
  {
    accessorKey: "total",
    header: literals.totalText,
    accessorFn: (row) => `${row.total}€`,
  },
];
