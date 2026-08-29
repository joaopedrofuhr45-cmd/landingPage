import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:8080/api/tasks');
  }

  
  createTask(title: string): Observable<Task> {
    return this.http.post<Task>('http://localhost:8080/api/tasks', { title });
  }

  updateTask(id: number, changes: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`http://localhost:8080/api/tasks/${id}`, changes);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/tasks/${id}`);
  }
}