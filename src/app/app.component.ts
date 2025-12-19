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
  // [SAM1-28] Updated H1 title for frontend testing
  title = 'iathon testing';
  currentYear = new Date().getFullYear();
}