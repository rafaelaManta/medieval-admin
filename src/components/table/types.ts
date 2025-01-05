import { HeaderGroup, RowData } from "@tanstack/table-core";

export interface TableUIProps {
  tableData: {
    data: unknown;
    columns: { accessorKey: string; header: string }[];
  };
  path?: string;
  deleteButtonPressAction: (id: number) => void;
}

export interface TableHeaderProps {
  headerGroups: HeaderGroup<RowData>[];
}
