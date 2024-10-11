import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  // standalone: true,
  // imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  userId  = input.required<string>();
  name = input.required<string>();
  isAddingTask = false;

  constructor(private tasksService: TasksService) {    
  }

  get SelectedUserTasks()
  { 
    return this.tasksService.getUserTasks(this.userId());
  }

  onAddTask()
  {
    this.isAddingTask = true;
  }

  onCloseTask()
  {
    this.isAddingTask = false;
  }
}
