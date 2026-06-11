import { Component, OnInit, computed, inject, signal } from '@angular/core';
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
import { ModalComponent } from '../../components/modal/modal';
import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form';
import { ToastComponent } from '../../components/toast/toast';
import { FormField } from '../../models/form-field';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  imports: [
    HugeiconsIconComponent,
    ButtonCreate,
    ModalComponent,
    DynamicFormComponent,
    ToastComponent,
  ],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements OnInit {
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

  isModalOpen = signal(false);
  toastMessage = signal<string | null>(null);
  toastType = signal<'success' | 'error'>('success');
  students = signal<Student[]>([]);
  loading = signal(false);
  error = signal('');

  totalStudents = computed(() => this.students().length);
  activeStudents = computed(
    () => this.students().filter((student) => student.status === 'Active').length,
  );

  private studentsService = inject(StudentsService);
  private toastTimeout?: ReturnType<typeof setTimeout>;

  studentFormFields: FormField[] = [
    { name: 'name', label: 'Student Name', type: 'text', required: true },
    { name: 'idNumber', label: 'ID Number', type: 'text', required: true },
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

  ngOnInit(): void {
    this.loadStudents();
  }

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

  loadStudents() {
    this.loading.set(true);
    this.error.set('');

    this.studentsService.getAll().subscribe({
      next: (data) => {
        this.students.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load students.');
        this.loading.set(false);
      },
    });
  }

  onFormSubmit(data: Record<string, unknown>) {
    this.studentsService.create(data).subscribe({
      next: () => {
        this.closeModal();
        this.showToast('Student created successfully.', 'success');
        this.loadStudents();
      },
      error: (error) => {
        const message =
          error.error?.message ?? error.message ?? 'Failed to create student. Please try again.';
        this.showToast(message, 'error');
      },
    });
  }
}
