import { 
  ChangeDetectionStrategy,
  Component,
  signal,
  output,
  HostListener} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NAVIGATION_ITEMS } from '../../config/navigation.config';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  // Outputs
  readonly menuToggle = output<void>();

  // Configuración
  protected readonly navigationItems = NAVIGATION_ITEMS;
  protected readonly portfolio = PORTFOLIO_CONFIG;

  // Métodos
  protected onMenuButtonClick(): void {
    this.menuToggle.emit();
  }

  // signal para indicar si la pagina hizo scroll
  protected readonly scrolled = signal(false);

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 0);
  }
}