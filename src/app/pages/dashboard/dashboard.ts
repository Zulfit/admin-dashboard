import { Component } from '@angular/core';
import { HugeiconsIconComponent } from '@hugeicons/angular';

import {
  PlusSignIcon,
  StudentIcon,
  TeacherIcon,
  Book01Icon,
  Calendar01FreeIcons
} from '@hugeicons/core-free-icons';
import { ButtonCreate } from '../../components/button-create/button-create';

@Component({
  selector: 'app-dashboard',
  imports: [HugeiconsIconComponent, ButtonCreate],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  plusIcon = PlusSignIcon;
  studentIcon = StudentIcon;
  teacherIcon = TeacherIcon;
  bookIcon = Book01Icon;
  scheduleIcon = Calendar01FreeIcons;
}
