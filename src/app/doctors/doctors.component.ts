import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorsService } from '../services/doctors.services';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  firstName: string = 'Max'
  doctorName: string;
  isWhite: boolean = true;
  showMessage: boolean = true;
  doctors: Doctor[];
  showDirective = true;
  @ViewChild('firstName')
  fName: string = '';
  message: string = "Pipe test testing";
  currentDate: Date = new Date();
  isLoading = false;
  error: string;

  constructor(private router: Router, private doctorService: DoctorsService) {
    this.doctorName = "Maria";


    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.doctorService.getDoctors()
      .subscribe(response => {
        this.isLoading = false;
        this.doctors = response;
      },
        (error: HttpErrorResponse) => {
          this.error = error.message;
        });;
  }

  getFullName() {
    return this.doctorName;
  }


  addDoctor(data: Doctor) {
    this.doctorService.addDoctor(data);
  }

  onAddDoctor() {
    this.router.navigate(['/doctors/create'])
  }

  onClearDoctors() {
    this.doctorService.clearDoctors();
  }
}