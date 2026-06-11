import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StudentsService {
  private readonly apiUrl = `${environment.apiUrl}/students`;
  private http = inject(HttpClient);

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  create(data: Record<string, unknown>): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, data);
  }
}
