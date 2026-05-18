import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Lecturers } from './pages/lecturers/lecturers';
import { Students } from './pages/students/students';
import { Subjects } from './pages/subjects/subjects';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'lecturers', component: Lecturers },
  { path: 'students', component: Students },
  { path: 'subjects', component: Subjects },
];
