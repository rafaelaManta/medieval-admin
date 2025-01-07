import React from "react";
import { flexRender } from "@tanstack/react-table";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { TableHeaderProps } from "./types";

export const TableHeaderUI = ({ headerGroups }: TableHeaderProps) => {
  if (!headerGroups) return null;
  return (
    <TableHeader>
      {headerGroups.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead
              key={header.id}
              // @ts-ignore
              className={`text-base ${header.column.columnDef?.meta?.headerClassName}`}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
};
