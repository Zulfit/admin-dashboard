import { Component, inject } from '@angular/core';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { HttpClient } from '@angular/common/http';
import { FormField } from '../../models/form-field';

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
import { ModalComponent } from '../../components/modal/modal';
import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form';

@Component({
  selector: 'app-lecturers',
  imports: [HugeiconsIconComponent, ButtonCreate, ModalComponent, DynamicFormComponent],
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

  isModalOpen = false;

  private http = inject(HttpClient);

  lecturersFormFields: FormField[] = [
    { name: 'name', label: 'Lecturer Name', type: 'text', required: true },
    { name: 'idNumber', label: 'ID Number', type: 'number', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { 
      name: 'course', 
      label: 'Course', 
      type: 'select', 
      required: true, 
      options: [
        { label: 'Computer Science', value: 'Computer Science' },
        { label: 'Business Administration', value: 'Business Administration' },
        { label: 'Engineering', value: 'Engineering' }
      ]
    },
    { 
      name: 'status', 
      label: 'Status', 
      type: 'select', 
      required: true, 
      options: [
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' }
      ]
    }
  ];

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onFormSubmit(data: any) {
    console.log('Form Submitted!', data);

    this.http.post('http://localhost:3000/lecturers', data).subscribe({
      next: (response) => {
        console.log('Lecturer created successfully:', response);
        this.closeModal();
      },
      error: (error) => {
        console.error('Error creating lecturer:', error);
      }
    });
  }
}
