import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-card',
  standalone: true,
  templateUrl: './resource-card.component.html',
  styleUrl: './resource-card.component.css',
})
export class ResourceCardComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
  @Input() icon = '✓';
}
