import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent {
  @Input({ required: true }) tag = '';
  @Input({ required: true }) title = '';
  @Input() variant: 'about' | 'resources' | 'contact' = 'about';
}
