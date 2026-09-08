import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-preview-item',
  standalone: true,
  templateUrl: './task-preview-item.component.html',
  styleUrl: './task-preview-item.component.css',
})
export class TaskPreviewItemComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) status = '';
  @Input() completed = false;
}
