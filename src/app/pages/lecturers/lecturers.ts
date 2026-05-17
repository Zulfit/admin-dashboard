import { Component } from '@angular/core';
import { HugeiconsIconComponent } from '@hugeicons/angular';

import { 
  PlusSignIcon,
  ApartmentIcon,
  FilterIcon,
  FilterMailIcon,
  Delete02Icon,
  Edit02Icon,
  ViewIcon,
  Award04Icon,
  CalendarIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  UserGroupIcon
 } from '@hugeicons/core-free-icons';
import { ButtonCreate } from '../../components/button-create/button-create';

@Component({
  selector: 'app-lecturers',
  imports: [HugeiconsIconComponent, ButtonCreate],
  templateUrl: './lecturers.html',
  styleUrl: './lecturers.css',
})
export class Lecturers {
  plusIcon = PlusSignIcon;
  apartmentIcon = ApartmentIcon;
  filterIcon = FilterIcon;
  filterMailIcon = FilterMailIcon;
  deleteIcon = Delete02Icon;
  editIcon = Edit02Icon;
  viewIcon = ViewIcon;
  awardIcon = Award04Icon;
  calendarIcon = CalendarIcon;
  leftArrowIcon = ArrowLeftIcon;
  rightArrowIcon = ArrowRightIcon;
  userGroupIcon = UserGroupIcon;
}
