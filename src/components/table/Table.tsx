"use client";
import React, { useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { TableHeaderUI as TableHeader } from "./TableHeader";
import { TableActions } from "./TableActions";
import type { TableUIProps } from "./types";

export const TableUI = ({
  data,
  editLink,
  columns,
  displayLink,
  deleteButtonPressAction,
}: TableUIProps) => {
  const extendedColumns = useMemo(() => {
    return [
      ...columns,
      {
        id: "actions",
        header: "Actions",
        cell: (item: { row: { original: { id: number } } }) => {
          return (
            <TableActions
              editLink={editLink}
              row={item.row.original}
              handleDelete={deleteButtonPressAction}
              displayLink={displayLink}
            />
          );
        },
      },
    ];
  }, [columns, editLink, displayLink, deleteButtonPressAction]);

  const table = useReactTable({
    // @ts-ignore
    data,
    columns: extendedColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card className={"pt-6 lg:w-2/3"}>
      <CardContent>
        <Table>
          <TableHeader headerGroups={table?.getHeaderGroups()} />
          <TableBody>
            {table?.getRowModel()?.rows?.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    // @ts-ignore
                    className={cell.column.columnDef?.meta?.className}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
