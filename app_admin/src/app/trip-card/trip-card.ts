import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrls: ['./trip-card.css']
})
export class TripCard implements OnInit {
  @Input('trip') trip!: Trip;
  @Output() editTrip = new EventEmitter<Trip>();

  ngOnInit(): void {}

  onEdit(): void {
    this.editTrip.emit(this.trip);
  }
}

