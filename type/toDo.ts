export type PriorityType = "high" | "medium" | "low";

export type ToDoType = {
  id: string;
  name: string;
  priority: PriorityType;
  completed: boolean;
};
