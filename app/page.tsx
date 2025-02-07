"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "./toDo/data-table";
import { useAtom, useAtomValue } from "jotai";
import { toDoListAtom } from "@/store/toDoListAtom";
import { columns } from "./toDo/columns";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddToDoForm } from "@/components/addToDoForm";
import { openDialogAtom } from "@/store/openDialogAtom";

export default function Home() {
  const toDoList = useAtomValue(toDoListAtom);
  const [openDialog, setOpenDialog] = useAtom(openDialogAtom);

  return (
    <main className="p-12 flex flex-col gap-6">
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button className="w-20">Add</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add To Do</DialogTitle>
          </DialogHeader>

          <AddToDoForm />
        </DialogContent>
      </Dialog>

      <DataTable columns={columns} data={toDoList} />
    </main>
  );
}
