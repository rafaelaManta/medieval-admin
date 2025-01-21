import { HeaderGroup, RowData } from "@tanstack/table-core";
import { ColumnDef } from "@tanstack/react-table";

export interface TableUIProps {
  data: unknown;
  columns: ColumnDef<any, any>[];
  editLink?: string;
  displayLink?: string;
  deleteButtonPressAction?: (id: number) => void;
}

export interface TableHeaderProps {
  headerGroups: HeaderGroup<RowData>[];
}
