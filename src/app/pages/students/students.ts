import { Component } from '@angular/core';
import { HugeiconsIconComponent } from '@hugeicons/angular';

import {
  StudentIcon,
  TeacherIcon,
  Book01Icon,
  FilterIcon,
  FilterMailIcon,
  Delete02Icon,
  Edit02Icon,
  ViewIcon,
  Award04Icon,
  CalendarIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@hugeicons/core-free-icons';

import { ButtonCreate } from '../../components/button-create/button-create';

@Component({
  selector: 'app-students',
  imports: [HugeiconsIconComponent, ButtonCreate],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  studentIcon = StudentIcon;
  teacherIcon = TeacherIcon;
  bookIcon = Book01Icon;
  filterIcon = FilterIcon;
  filterMailIcon = FilterMailIcon;
  deleteIcon = Delete02Icon;
  editIcon = Edit02Icon;
  viewIcon = ViewIcon;
  awardIcon = Award04Icon;
  calendarIcon = CalendarIcon;
  leftArrowIcon = ArrowLeftIcon;
  rightArrowIcon = ArrowRightIcon;
}
