import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Lecturers } from './pages/lecturers/lecturers';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'lecturers', component: Lecturers },
];
