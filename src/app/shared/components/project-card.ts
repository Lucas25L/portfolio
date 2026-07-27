import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '../../core/models/project.model';

@Component({
    selector: 'app-project-card',
    imports: [],
    templateUrl: './project-card.html',
    styleUrl: './project-card.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent {

    readonly project = input.required<Project>();

    readonly reverse = input(false);
}