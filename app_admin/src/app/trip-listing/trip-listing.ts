import { Component, OnInit } from '@angular/core';
import { CommonModule,JsonPipe } from '@angular/common';
import { trips } from '../data/trips';

@Component({
  selector: 'app-trip-listing',
  imports: [JsonPipe],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})
export class TripListing implements OnInit{
  trips: Array<any> = trips;

  constructor() {}

  ngOnInit(): void {
    
  }

}
