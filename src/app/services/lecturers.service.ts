import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Lecturer } from '../models/lecturer.model';

@Injectable({ providedIn: 'root' })
export class LecturersService {
  private readonly apiUrl = `${environment.apiUrl}/lecturers`;
  private http = inject(HttpClient);

  getAll(): Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>(this.apiUrl);
  }

  create(data: Record<string, unknown>): Observable<Lecturer> {
    return this.http.post<Lecturer>(this.apiUrl, data);
  }
}
