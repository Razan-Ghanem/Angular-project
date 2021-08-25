import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Appointment } from '../models/appointment';
@Component({
  selector: 'app-appointment-header',
  templateUrl: './appointment-header.component.html',
  styleUrls: ['./appointment-header.component.css']
})
export class AppointmentHeaderComponent implements OnInit {
 
  @Output()
  appointmentsAdded = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  
  addAppointment(doctor:HTMLInputElement, patient:HTMLInputElement, reservation:HTMLInputElement){
    // this.appointmentsAdded.emit(new Appointment(0,doctor.value, patient.value, reservation.value ));
    this.appointmentsAdded.emit({id: 0, doctor: doctor.value, patient: patient.value, reservation: reservation.value});
 }
}