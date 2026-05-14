import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { Dashboard } from './pages/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('admin-dashboard');
}
