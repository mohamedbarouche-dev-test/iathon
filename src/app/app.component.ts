import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // [SAM1-38] Updated H1 title to 'iathon testing _DEMO'
  title = 'iathon testing _DEMO';
  currentYear = new Date().getFullYear();
}