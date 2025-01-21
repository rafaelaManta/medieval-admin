import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components";
import Link from "next/link";

export const TableActions = ({
  editLink,
  row,
  handleDelete,
  displayLink,
}: {
  editLink?: string;
  displayLink?: string;
  row: {
    id: number;
  };
  handleDelete?: (id: number) => void;
}) => {
  return (
    <div className={"flex gap-2.7 "}>
      {editLink && (
        <Button
          size="icon"
          variant={"ghost"}
          className={"hover:bg-primary hover:text-white"}
        >
          <Link href={`${editLink}/${row.id}`}>
            <Pencil strokeWidth={1.5} />
          </Link>
        </Button>
      )}
      {displayLink && (
        <Button
          size="icon"
          variant={"ghost"}
          className={"hover:bg-primary hover:text-white"}
        >
          <Link href={`${displayLink}/${row.id}`}>
            <Eye />
          </Link>
        </Button>
      )}
      {handleDelete && (
        <Button
          size="icon"
          variant={"ghost"}
          className={"hover:bg-primary hover:text-white"}
          onClick={(e) => {
            e.preventDefault();
            handleDelete(row.id);
          }}
        >
          <Trash2 strokeWidth={1.5} />
        </Button>
      )}
    </div>
  );
};
