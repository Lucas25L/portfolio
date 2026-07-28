import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_CONFIG } from '../../core/config/contact.config';

@Component({
    selector: 'app-contact',
    imports: [],
    templateUrl: './contact.html',
    styleUrl: './contact.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {

    protected readonly contact = CONTACT_CONFIG;

}