import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:8080/api/tasks', { withCredentials: true });
  }

  
  createTask(title: string): Observable<Task> {
    return this.http.post<Task>('http://localhost:8080/api/tasks', { title }, { withCredentials: true });
  }

  updateTask(id: number, changes: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`http://localhost:8080/api/tasks/${id}`, changes, { withCredentials: true });
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/tasks/${id}`, { withCredentials: true });
  }
}