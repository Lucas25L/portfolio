import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectCardComponent } from '../../shared/components/project-card';
import { PROJECTS_CONFIG } from '../../core/config/projects.config';

@Component({
    selector: 'app-projects',
    imports: [ProjectCardComponent],
    templateUrl: './projects.html',
    styleUrl: './projects.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {

    protected readonly projects = PROJECTS_CONFIG;

}