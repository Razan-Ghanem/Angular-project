import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Doctor } from '../models/doctor';
@Component({
  selector: 'app-doctor-header',
  templateUrl: './doctor-header.component.html',
  styleUrls: ['./doctor-header.component.css']
})
export class DoctorHeaderComponent implements OnInit {

  @Output()
  doctorsAdded = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  
  addDoctor(firstName:HTMLInputElement, lastName:HTMLInputElement, address:HTMLInputElement, notes:HTMLInputElement,phoneNumber:HTMLInputElement, email:HTMLInputElement, monthlySalary:HTMLInputElement, iban:HTMLInputElement, country:HTMLInputElement,){
    this.doctorsAdded.emit(new Doctor(0,firstName.value, lastName.value, address.value , notes.value, phoneNumber.value, email.value, 0, iban.value, country.value ));
 }
}