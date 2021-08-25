import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '../models/appointment';
import { AppointmentsService } from '../services/appointments.services';
@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {

  createForm:FormGroup;

  constructor(private appointmentService: AppointmentsService) { }

  ngOnInit(): void {

    this.createForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
      }),
      address: new FormControl(),
      notes: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(null, [Validators.required, Validators.email,this.restrictedemails]),
      monthlySalary:new FormControl(),
      iban: new FormControl(),
      country: new FormControl(),
  
    })
  }

  onSubmit(){

    if(!this.createForm.valid)
      return;

      let appointment = new Appointment();
        //(this.appointmentService.appointments.length + 1, this.createForm.value.doctor, this.createForm.value.patient,this.createForm.value.reservation);
      appointment.id = this.appointmentService.appointments.length + 1;
      appointment.doctor = this.createForm.value.doctor;
      appointment.patient = this.createForm.value.patient;
      appointment.reservation = this.createForm.value.reservation;
      
    this.appointmentService.addAppointment(appointment);

    this.createForm.reset();
  }

  restrictedemails(control:FormControl){ 
    let emails = ['test@test.com', 'aa@aa.com']
      if(emails.indexOf(control.value) > -1){
        return {restrictedemail: true}
      }

      return null;  
    }
  }
