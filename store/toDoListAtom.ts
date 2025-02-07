import { AddToDoType, ToDoType } from "@/type/toDo";
import { atom } from "jotai";

export const toDoListAtom = atom<ToDoType[]>([]);

export const addToDoAtom = atom(
  null,
  (get, set, { id, name, priority, startDate, endDate }: AddToDoType) => {
    const currentToDoList = get(toDoListAtom);
    const newToDo = {
      id,
      name,
      priority,
      startDate,
      endDate,
      completed: false,
    };
    const newToDoList = [...currentToDoList, newToDo];
    set(toDoListAtom, newToDoList);
  }
);

export const removeTodoAtom = atom(null, (get, set, id: string) => {
  const currentToDoList = get(toDoListAtom);
  const filteredToDoList = currentToDoList.filter((toDo) => toDo.id !== id);
  set(toDoListAtom, filteredToDoList);
});
