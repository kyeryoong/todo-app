import { PriorityType, ToDoType } from "@/type/toDo";
import { atom } from "jotai";

export const toDoListAtom = atom<ToDoType[]>([]);

export const addToDoListAtom = atom(
  null,
  (
    get,
    set,
    { id, name, priority }: { id: string; name: string; priority: PriorityType }
  ) => {
    const currentToDoList = get(toDoListAtom);
    const newToDo = { id, name, priority, completed: false };
    const newToDoList = [...currentToDoList, newToDo];
    set(toDoListAtom, newToDoList);
  }
);

export const removeTodoAtom = atom(null, (get, set, id: string) => {
  const currentToDoList = get(toDoListAtom);
  const filteredToDoList = currentToDoList.filter((toDo) => toDo.id !== id);
  set(toDoListAtom, filteredToDoList);
});
