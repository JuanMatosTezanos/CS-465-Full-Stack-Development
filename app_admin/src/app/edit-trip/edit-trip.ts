import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.html',
  styleUrls: ['./edit-trip.css']
})
export class EditTrip implements OnInit {
  editForm!: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private tripService: TripData
  ) {}

  ngOnInit(): void {
    const tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert("Couldn't find tripCode in localStorage!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.tripService.getTrip(tripCode).subscribe(trip => {
      this.editForm.patchValue(trip);
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.editForm.valid) {
      const tripCode = this.editForm.value.code;
      this.tripService.updateTrip(tripCode, this.editForm.value).subscribe({
        next: () => this.router.navigate(['']),
        error: err => console.error('Update failed', err)
      });
    }
  }

  get f() {
    return this.editForm.controls;
  }
}

