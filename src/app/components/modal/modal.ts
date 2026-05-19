import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { Cancel01Icon } from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, HugeiconsIconComponent],
  templateUrl: './modal.html'
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Output() close = new EventEmitter<void>();

  closeIcon = Cancel01Icon;

  closeModal() {
    this.close.emit();
  }
}
