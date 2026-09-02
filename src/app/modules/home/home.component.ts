import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TaskServiceService } from '../../service/taskService/task-service.service';
import { CommonModule} from '@angular/common';
import { Task } from '../../models/task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private fb = inject(FormBuilder);
  private taskService = inject(TaskServiceService);

  taskForm = this.fb.group({
    title: [''],
  });

  tasks: Task[] = [];

  errorMessage: string | null = null;

  criarTask(title: string) {
    this.taskService.createTask(title).subscribe({
      next: (task) => {
        this.tasks.push(task);
        this.taskForm.reset();
      },
      error: (error) => {
        console.error('Erro ao criar tarefa', error);
        this.errorMessage = 'Não foi possível criar a tarefa';
      },
    });
  }


  carregarTasks() {
  this.taskService.getTasks().subscribe({
    next: (tasks) => {
      this.tasks = tasks;
    },
    error: (error) => {
      console.error('Erro ao carregar tarefas', error);
      this.errorMessage = 'Não foi possível carregar suas tarefas';
    }
  });
}

  atualizarTask(id: number, changes: Partial<Task>) {
    this.taskService.updateTask(id, changes).subscribe({
      next: (updatedTask) => {
        const index = this.tasks.findIndex((task) => task.id === id);
        this.tasks[index] = updatedTask;
      },
      error: (error) => {
        console.error('Erro ao atualizar tarefa', error);
        this.errorMessage = 'Não foi possível atualizar a tarefa';
      },
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      },
      error: (error) => {
        console.error('Erro ao deletar tarefa', error);
        this.errorMessage = 'Não foi possível deletar a tarefa';
      },
    });
  }

  ngOnInit() {
    this.carregarTasks();
  }
}
