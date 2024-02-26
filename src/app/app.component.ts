import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  styles: [],
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent]
})
export class AppComponent {
  title = 'angular-shop';
}
