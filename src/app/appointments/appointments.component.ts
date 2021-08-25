import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import {AppointmentsService } from '../services/appointments.services';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  isWhite: boolean = true;
  showMessage: boolean = true;
  appointments: Appointment[];
  showDirective = true;
  @ViewChild('firstName')
  fName: string = '';
  message: string = "Pipe test testing";
  currentDate: Date = new Date();
  isLoading = false;
  error: string;

  constructor(private router: Router, private appointmentService: AppointmentsService) {


    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.appointmentService.getAppointments()
      .subscribe(response => {
        this.isLoading = false;
        this.appointments = response;
      },
        (error: HttpErrorResponse) => {
          this.error = error.message;
        });;
  }



  addAppointment(data: Appointment) {
    this.appointmentService.addAppointment(data);
  }

  onAddAppointment() {
    this.router.navigate(['/appointments/create'])
  }

  onClearAppointment() {
    this.appointmentService.clearAppointments();
  }
}
