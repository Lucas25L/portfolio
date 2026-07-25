import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT_CONFIG } from '../../core/config/about.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  // Configuración
  protected readonly about = ABOUT_CONFIG;
  
}
