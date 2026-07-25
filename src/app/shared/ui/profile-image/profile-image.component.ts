import {
  ChangeDetectionStrategy,
  Component,
  input
} from '@angular/core';

@Component({
  selector: 'app-profile-image',
  standalone: true,
  templateUrl: './profile-image.component.html',
  styleUrl: './profile-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileImageComponent {

  // Inputs
  readonly src = input.required<string>();
  readonly alt = input.required<string>();

}