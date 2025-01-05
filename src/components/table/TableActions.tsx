import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components";
import Link from "next/link";

export const TableActions = ({
  path,
  row,
  handleDelete,
}: {
  path?: string;
  row: {
    id: number;
  };
  handleDelete: (id: number) => void;
}) => {
  return (
    <div className={"flex gap-2.7"}>
      <Button size="icon" variant={"ghost"}>
        <Link href={`${path}/${row.id}`}>
          <Pencil strokeWidth={1.5} />
        </Link>
      </Button>

      <Button
        size="icon"
        variant={"ghost"}
        onClick={(e) => {
          e.preventDefault();
          handleDelete(row.id);
        }}
      >
        <Trash2 strokeWidth={1.5} />
      </Button>
    </div>
  );
};
