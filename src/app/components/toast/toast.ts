import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { Cancel01Icon, CheckmarkCircle02Icon, Alert02Icon } from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, HugeiconsIconComponent],
  templateUrl: './toast.html',
})
export class ToastComponent {
  message = input.required<string>();
  type = input<'success' | 'error'>('success');
  dismiss = output<void>();

  closeIcon = Cancel01Icon;
  successIcon = CheckmarkCircle02Icon;
  errorIcon = Alert02Icon;

  onDismiss() {
    this.dismiss.emit();
  }
}
