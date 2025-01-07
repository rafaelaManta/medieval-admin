import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export const orderColumns: ColumnDef<
  {
    id: number;
    table: { id: number; title: string; order: number };
    waiter: { id: number; name: string };
    completed: boolean;
    total: number;
  },
  never
>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "table",
    header: "Τραπέζι",
    cell: (item) => item.getValue()?.title,
  },
  {
    accessorKey: "waiter",
    header: "Σερβιτόρος",
    cell: (item) => item.getValue()?.name,
  },
  {
    accessorKey: "completed",
    header: "Ολοκληρωμένη",
    meta: { className: "text-center", headerClassName: "text-center" },
    cell: (item) => {
      return <Checkbox checked={item.getValue()} disabled />;
    },
  },
  {
    accessorKey: "total",
    header: "Σύνολο",
    cell: (item) => `${item.getValue()}€`,
  },
];
