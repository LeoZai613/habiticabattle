export type TaskType = 'habit' | 'daily' | 'todo';

export interface Task {
  id: string;
  title: string;
  type: TaskType;
  completed: boolean;
  difficulty: 'trivial' | 'easy' | 'medium' | 'hard';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}