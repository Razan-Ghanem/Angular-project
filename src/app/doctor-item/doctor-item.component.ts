import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.css']
})
export class DoctorItemComponent implements OnInit {
  @Input('doctorItem')
  doctor: Doctor; 

constructor() {
  this.doctor = new Doctor(0,'Joe','E','','','','',0,'','');
 }

ngOnInit(): void {
}

ngOnDestroy(){

}

ngOnChanges(){

}
}
