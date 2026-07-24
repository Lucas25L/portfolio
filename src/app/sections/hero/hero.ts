import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HERO_CONFIG } from '../../core/config/hero.config';
import { HERO_ACTIONS } from '../../core/config/hero-actions.config';

import { MatButtonModule } from '@angular/material/button';
import { HERO_IMAGE } from '../../core/config/hero-image.config';
import { ICONS } from '../../core/config/icons.config';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    MatButtonModule,
    FaIconComponent
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {

  // Configuración
  protected readonly hero = HERO_CONFIG;
  protected readonly heroActions = HERO_ACTIONS;
  protected readonly heroImage = HERO_IMAGE;
  // Iconos
  protected readonly icons = ICONS;
}