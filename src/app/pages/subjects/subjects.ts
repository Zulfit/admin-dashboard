import { Component } from '@angular/core';
import { HugeiconsIconComponent } from '@hugeicons/angular';

import {
  StudentIcon,
  TeacherIcon,
  Book01Icon,
  UserIcon,
  Clock02Icon,
  PlusSignIcon
} from '@hugeicons/core-free-icons';

import { ButtonCreate } from '../../components/button-create/button-create';

@Component({
  selector: 'app-subjects',
  imports: [HugeiconsIconComponent, ButtonCreate],
  templateUrl: './subjects.html',
  styleUrl: './subjects.css',
})
export class Subjects {
  studentIcon = StudentIcon;
  teacherIcon = TeacherIcon;
  bookIcon = Book01Icon;
  userIcon = UserIcon;
  clockIcon = Clock02Icon;
  plusIcon = PlusSignIcon;
}
