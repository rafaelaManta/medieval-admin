"use client";
import { Checkbox } from "@/components/ui/checkbox";

export const productFields = [
  {
    name: "name",
    label: "Προϊόν",
    type: "text",
  },
  {
    name: "description",
    label: "Περιγραφή",
    type: "textarea",
  },
  {
    name: "price",
    label: "Κόστος",
    type: "text",
  },
  {
    name: "price_takeaway",
    label: "Takeaway",
    type: "text",
  },
  {
    name: "in_stock",
    label: "Σε Απόθεμα",
    type: "checkbox",
  },
  {
    name: "tags",
    label: "Λεπτομέριες",
    type: "tags",
  },
];

export const productColumns = [
  {
    accessorKey: "name",
    header: "Προϊόν",
  },
  {
    accessorKey: "price",
    header: "Κόστος",
    cell: (item) => `${item.getValue()}€`,
  },
  {
    accessorKey: "price_takeaway",
    header: "Takeaway",
    cell: (item) => `${item.getValue()}€`,
  },
  {
    accessorKey: "in_stock",
    header: "Σε Απόθεμα",
    meta: {
      className: "text-center",
      headerClassName: "text-center",
    },
    cell: (item) => {
      return <Checkbox disabled checked={Boolean(item.getValue())} />;
    },
  },
];
