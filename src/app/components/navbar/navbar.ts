import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HugeiconsIconComponent } from '@hugeicons/angular';

import {
  StudentIcon,
  TeacherIcon,
  Book01Icon
} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-navbar',
  imports: [HugeiconsIconComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  studentIcon = StudentIcon;
  teacherIcon = TeacherIcon;
  bookIcon = Book01Icon;
}
