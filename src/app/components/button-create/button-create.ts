import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { PlusSignIcon } from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-button-create',
  standalone: true,
  imports: [HugeiconsIconComponent],
  templateUrl: './button-create.html',
  styleUrl: './button-create.css',
})
export class ButtonCreate {
  @Input() label: string = 'Create';
  @Output() action = new EventEmitter<void>();
  plusIcon = PlusSignIcon;

}
