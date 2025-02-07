"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSetAtom } from "jotai";
import { addToDoAtom } from "@/store/toDoListAtom";
import { v4 as uuidv4 } from "uuid";
import { openDialogAtom } from "@/store/openDialogAtom";
import { PriorityType } from "@/type/toDo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogFooter } from "../ui/dialog";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Task name must not be empty.",
  }),
  priority: z.union([
    z.literal("low"),
    z.literal("medium"),
    z.literal("high"),
  ]) as z.ZodType<PriorityType>,
});

export function AddToDoForm() {
  const addToDo = useSetAtom(addToDoAtom);
  const setOpenDialog = useSetAtom(openDialogAtom);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      priority: "medium",
    },
  });

  function onSubmit({ name, priority }: z.infer<typeof formSchema>) {
    addToDo({ id: uuidv4(), name, priority });
    setOpenDialog(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
