import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';
import { trips as staticTrips } from '../data/trips';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css'],
  providers: [TripData]
})
export class TripListing implements OnInit {
  trips: Trip[] = staticTrips;
  message: string = '';

  constructor(private router: Router, private tripDataService: TripData) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  private loadTrips(): void {
    this.tripDataService.getTrips().subscribe({
      next: (data) => {
        this.trips = [...staticTrips, ...data];
        this.message = this.trips.length > 0
          ? `There are ${this.trips.length} trips available.`
          : 'There were no trips retrieved from the database';
      },
      error: () => {
        this.trips = staticTrips;
        this.message = 'Failed to load trips from the server. Showing example trips only.';
      }
    });
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']).then(() => {
      this.loadTrips();
    });
  }

  public handleEditTrip(trip: Trip): void {
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }
}




