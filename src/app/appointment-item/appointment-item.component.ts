import { Component,Input, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent implements OnInit {
  @Input('appointmentItem')
  appointment: Appointment; 

constructor() {
  this.appointment = new Appointment();

 }

ngOnInit(): void {
}

ngOnDestroy(){

}

ngOnChanges(){

}
}
