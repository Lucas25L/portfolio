import { Component } from '@angular/core';
import { Contact } from '../../../sections/contact/contact';
import { Stack } from '../../../sections/stack/stack';
import { Projects } from '../../../sections/projects/projects';
import { About } from '../../../sections/about/about';
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
    About,
    Stack,
    Projects,
    Contact,
    
    MatSidenavModule,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  protected readonly navigationItems = NAVIGATION_ITEMS;
  protected readonly portfolio = PORTFOLIO_CONFIG;
}

