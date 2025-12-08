import { CommonModule} from '@angular/common';
import { Component, signal } from '@angular/core';
//import { TripListing } from './trip-listing/trip-listing';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Travlr Getaways Admin!');
}
