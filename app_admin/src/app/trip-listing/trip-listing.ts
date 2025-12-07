import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';   // <-- static array import
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})
export class TripListing implements OnInit {
  trips: Array<any> = trips;   // <-- static array assignment
  message: string = '';

  constructor() {
    console.log('trip-listing constructor');
    this.message = this.trips.length > 0
      ? 'There are ' + this.trips.length + ' trips available.'
      : 'There were no trips retrieved from the database';
    console.log(this.message);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}




