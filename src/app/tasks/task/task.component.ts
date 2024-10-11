import { Component, EventEmitter, inject, input, Output, output } from '@angular/core';
import { Task } from '../task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from "@angular/common";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  // standalone: true,
  // imports: [ DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  private tasksService = inject(TasksService);

  onComplete() {
    this.tasksService.removeTask(this.task().id);
  }
}
