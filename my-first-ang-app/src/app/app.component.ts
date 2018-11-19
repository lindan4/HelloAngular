import { Component } from '@angular/core';

@Component({
  // Keep note of app-root as it appears in the source code (index.html file)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Input something above';
}
