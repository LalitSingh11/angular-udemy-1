import { Component, EventEmitter, inject, input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output<void>();
  tasksService = inject(TasksService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onSubmit() {
    this.tasksService.addTask({
      enteredTitle: this.enteredTitle,
      enteredSummary: this.enteredSummary,
      enteredDate: this.enteredDate
    },
    this.userId());

    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
