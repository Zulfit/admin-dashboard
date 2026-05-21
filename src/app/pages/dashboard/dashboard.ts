import { Component, inject } from '@angular/core';
import { HugeiconsIconComponent } from '@hugeicons/angular';

import {
  PlusSignIcon,
  StudentIcon,
  TeacherIcon,
  Book01Icon,
  Calendar01FreeIcons
} from '@hugeicons/core-free-icons';
import { ButtonCreate } from '../../components/button-create/button-create';
import { ModalComponent } from '../../components/modal/modal';
import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form';
import { FormField } from '../../models/form-field';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HugeiconsIconComponent, ButtonCreate, ModalComponent, DynamicFormComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  plusIcon = PlusSignIcon;
  studentIcon = StudentIcon;
  teacherIcon = TeacherIcon;
  bookIcon = Book01Icon;
  scheduleIcon = Calendar01FreeIcons;

  isModalOpen = false;

  private http = inject(HttpClient);

  studentFormFields: FormField[] = [
    { name: 'name', label: 'Student Name', type: 'text', required: true },
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

    this.http.post('http://localhost:3000/students', data).subscribe({
      next: (response) => {
        console.log('Student created successfully:', response);
        this.closeModal();
      },
      error: (error) => {
        console.error('Error creating student:', error);
      }
    });
  }
}
