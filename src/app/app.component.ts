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
  // [SAM1-39] Change H1 title to "iathon DEMO_TEST"
  title = 'iathon DEMO_TEST';
  currentYear = new Date().getFullYear();
}