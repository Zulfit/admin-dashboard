import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormField } from '../../models/form-field';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.html'
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FormField[] = [];
  @Input() initialData: any = null; // For Edit mode
  @Output() formSubmit = new EventEmitter<any>();

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    const group: any = {};

    this.fields.forEach(field => {
      const validators = field.required ? [Validators.required] : [];
      // Initialize with existing data if provided (Edit mode)
      const value = this.initialData ? this.initialData[field.name] : '';
      group[field.name] = [value, validators];
    });

    this.formGroup = this.fb.group(group);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.formSubmit.emit(this.formGroup.value);
    } else {
      // Mark all as touched to show validation errors
      this.formGroup.markAllAsTouched();
    }
  }
}
