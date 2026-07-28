import { Component } from '@angular/core';
import { ContactComponent } from '../../../sections/contact/contact';
import { StackComponent } from '../../../sections/stack/stack';
import { ProjectsComponent } from '../../../sections/projects/projects';
import { AboutComponent } from '../../../sections/about/about';
import { HeroComponent } from '../../../sections/hero/hero';
import { NavbarComponent } from '../navbar/navbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NAVIGATION_ITEMS } from '../../config/navigation.config';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

@Component({
  selector: 'app-main-layout',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    StackComponent,
    ProjectsComponent,
    ContactComponent,
    
    MatSidenavModule,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  protected readonly navigationItems = NAVIGATION_ITEMS;
  protected readonly portfolio = PORTFOLIO_CONFIG;
}

