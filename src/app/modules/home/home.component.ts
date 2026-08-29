import { RouterLink } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TaskServiceService } from '../../service/taskService/task-service.service';
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  private fb = inject(FormBuilder);
  private taskService = inject(TaskServiceService);

  taskForm = this.fb.group({
    title: [''],
  });

  tasks: Task[] = [];

  criarTask(title: string) {
    this.taskService.createTask(title).subscribe((task) => {
      this.tasks.push(task);
      this.taskForm.reset();
    });
  }
  atualizarTask(id: number, changes: Partial<Task>) {
    this.taskService.updateTask(id, changes).subscribe((updatedTask) => {
      const index = this.tasks.findIndex((task) => task.id === id);
      this.tasks[index] = updatedTask;
    });
  }

  carregarTasks() {
  this.taskService.getTasks().subscribe((tasks) => {
    this.tasks = tasks;
  });
}

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    });
  }


  ngOnInit(){
    this.carregarTasks();
  }
}
