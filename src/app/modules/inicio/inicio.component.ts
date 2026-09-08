import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ResourceCardComponent } from '../../shared/components/resource-card/resource-card.component';
import { SectionComponent } from '../../shared/components/section/section.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ButtonComponent, HeroComponent, ResourceCardComponent, SectionComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
