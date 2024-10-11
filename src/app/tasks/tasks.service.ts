import { Injectable } from '@angular/core';
import { NewTask } from './new-task/new-task.model';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      dueDate: '2022-01-01',
      description: 'Build an app ',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Task 2',
      dueDate: '2022-01-02',
      description: 'Build an app that does something',
    },
    {
      id: 't3',
      userId: 'u4',
      title: 'Task 3',
      dueDate: '2022-01-03',
      description: 'Finish the documentation',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Task 4',
      dueDate: '2022-01-04',
      description: 'Do something else',
    },
    {
      id: 't5',
      userId: 'u4',
      title: 'Task 5',
      dueDate: '2022-01-05',
      description: 'Clean up the mess',
    },
    {
      id: 't6',
      userId: 'u5',
      title: 'Task 6',
      dueDate: '2022-01-06',
      description: 'Parse the data',
    },
    {
      id: 't7',
      userId: 'u6',
      title: 'Task 7',
      dueDate: '2022-01-07',
      description: 'Write the code',
    },
    {
      id: 't8',
      userId: 'u4',
      title: 'Task 8',
      dueDate: '2022-01-08',
      description: 'Test the code',
    },
    {
      id: 't9',
      userId: 'u5',
      title: 'Task 9',
      dueDate: '2022-01-09',
      description: 'Deploy the code',
    },
    {
      id: 't10',
      userId: 'u5',
      title: 'Task 10',
      dueDate: '2022-01-10',
      description: 'Set up the server',
    },
    {
      id: 't11',
      userId: 'u1',
      title: 'Task 11',
      dueDate: '2022-01-11',
      description: 'Make some changes',
    },
    {
      id: 't12',
      userId: 'u2',
      title: 'Task 12',
      dueDate: '2022-01-12',
      description: 'Maintain the app',
    },
    {
      id: 't13',
      userId: 'u3',
      title: 'Task 13',
      dueDate: '2022-01-13',
      description: 'Maintain the documentation',
    },
    {
      id: 't14',
      userId: 'u4',
      title: 'Task 14',
      dueDate: '2022-01-14',
      description: 'Maintain the server',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTask: NewTask, userId: string) {
    this.tasks = [
      ...this.tasks,
      {
        id: 'Task' + (this.tasks.length + 1),
        userId: userId,
        title: newTask.enteredTitle,
        dueDate: newTask.enteredDate,
        description: newTask.enteredSummary,
      },
    ];
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
