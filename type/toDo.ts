export type PriorityType = "high" | "medium" | "low";

export type ToDoType = {
  id: string;
  name: string;
  priority: PriorityType;
  startDate?: Date;
  endDate?: Date;
  completed: boolean;
};

export type AddToDoType = Omit<ToDoType, "completed">;
