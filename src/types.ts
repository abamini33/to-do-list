export type Priority = "low" | "medium" | "high";
export type Filter = "all" | "todo" | "done";

export type Todo = {
  id: string;
  text: string;
  priority: Priority;
  done: boolean;
};
