import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Appointment } from '../models/appointment';
import { AppointmentsService } from '../services/appointments.services';
@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  appointment:Appointment;

  constructor(private router:Router, private appointmentService:AppointmentsService, private route:ActivatedRoute) {
    this.appointment = new Appointment()
   }

  ngOnInit(): void {
       let allowEdit = this.route.snapshot.queryParams['allowEdit'];

      this.route.params.subscribe((params:Params)=>{
       this.appointment = this.appointmentService.appointments.find(p => p.id == +params['id'] ) as Appointment;
        
      })
    
  }

  onEdit(id:number){
    this.router.navigate(['/appointments', id, 'edit' ], {queryParams: {allowEdit: true}});
  }
  onClearAppointments() {
    this.appointmentService.deleteAppointment(this.appointment.id);
  }

}