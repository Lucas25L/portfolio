import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STACK_CONFIG } from '../../core/config/stack.config';

@Component({
    selector: 'app-stack',
    imports: [],
    templateUrl: './stack.html',
    styleUrl: './stack.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackComponent {

    protected readonly stack = STACK_CONFIG;

}