"use client";

import { ToDoType } from "@/type/toDo";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ToDoType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  { accessorKey: "date", header: "Date" },
  {
    accessorKey: "completed",
    header: "Completed",
  },
];
