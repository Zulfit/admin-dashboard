import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HugeiconsIconComponent } from '@hugeicons/angular';

import {
  StudentIcon,
  TeacherIcon,
  Book01Icon,
  UserIcon,
  Clock02Icon,
  PlusSignIcon,
} from '@hugeicons/core-free-icons';

import { ButtonCreate } from '../../components/button-create/button-create';
import { ModalComponent } from '../../components/modal/modal';
import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form';
import { ToastComponent } from '../../components/toast/toast';
import { FormField } from '../../models/form-field';

@Component({
  selector: 'app-subjects',
  imports: [
    HugeiconsIconComponent,
    ButtonCreate,
    ModalComponent,
    DynamicFormComponent,
    ToastComponent,
  ],
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

  isModalOpen = signal(false);
  toastMessage = signal<string | null>(null);
  toastType = signal<'success' | 'error'>('success');

  private http = inject(HttpClient);
  private toastTimeout?: ReturnType<typeof setTimeout>;

  subjectFormFields: FormField[] = [
    { name: 'code', label: 'Subject Code', type: 'text', required: true },
    { name: 'name', label: 'Subject Name', type: 'text', required: true },
    { name: 'lecturer', label: 'Lecturer', type: 'text', required: true },
    { name: 'schedule', label: 'Schedule', type: 'text', required: true },
    { name: 'capacity', label: 'Max Capacity', type: 'number', required: true },
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
    this.http.post('http://localhost:3000/subjects', data).subscribe({
      next: () => {
        this.closeModal();
        this.showToast('Subject created successfully.', 'success');
      },
      error: (error) => {
        const message =
          error.error?.message ?? error.message ?? 'Failed to create subject. Please try again.';
        this.showToast(message, 'error');
      },
    });
  }
}
