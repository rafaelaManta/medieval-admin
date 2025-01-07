import { HeaderGroup, RowData } from "@tanstack/table-core";

export interface TableUIProps {
  data: unknown;
  columns: { accessorKey: string; header: string }[];
  editLink?: string;
  deleteButtonPressAction: (id: number) => void;
}

export interface TableHeaderProps {
  headerGroups: HeaderGroup<RowData>[];
}
