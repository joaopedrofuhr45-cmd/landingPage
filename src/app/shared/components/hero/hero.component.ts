import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { TaskPreviewItemComponent } from '../task-preview-item/task-preview-item.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, ButtonComponent, TaskPreviewItemComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}
