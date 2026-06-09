import { Component, inject, signal } from '@angular/core';
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
  UserGroupIcon,
} from '@hugeicons/core-free-icons';
import { ButtonCreate } from '../../components/button-create/button-create';
import { ModalComponent } from '../../components/modal/modal';
import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form';
import { ToastComponent } from '../../components/toast/toast';

@Component({
  selector: 'app-lecturers',
  imports: [
    HugeiconsIconComponent,
    ButtonCreate,
    ModalComponent,
    DynamicFormComponent,
    ToastComponent,
  ],
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

  isModalOpen = signal(false);
  toastMessage = signal<string | null>(null);
  toastType = signal<'success' | 'error'>('success');

  private http = inject(HttpClient);
  private toastTimeout?: ReturnType<typeof setTimeout>;

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
        { label: 'Engineering', value: 'Engineering' },
      ],
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      options: [
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' },
      ],
    },
  ];

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  dismissToast() {
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
      this.toastTimeout = undefined;
    }
    this.toastMessage.set(null);
  }

  private showToast(message: string, type: 'success' | 'error') {
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }

    this.toastMessage.set(message);
    this.toastType.set(type);

    this.toastTimeout = setTimeout(() => this.dismissToast(), 5000);
  }

  onFormSubmit(data: Record<string, unknown>) {
    this.http.post('http://localhost:3000/lecturers', data).subscribe({
      next: () => {
        this.closeModal();
        this.showToast('Lecturer created successfully.', 'success');
      },
      error: (error) => {
        const message =
          error.error?.message ?? error.message ?? 'Failed to create lecturer. Please try again.';
        this.showToast(message, 'error');
      },
    });
  }
}
