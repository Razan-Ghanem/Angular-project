import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../models/doctor';
import { DoctorsService } from '../services/doctors.services';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {

  createForm:FormGroup;

  constructor(private doctorService: DoctorsService) { }

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

      let doctor = new Doctor(this.doctorService.doctors.length + 1, this.createForm.value.fullName.firstName, this.createForm.value.fullName.lastName,this.createForm.value.address, this.createForm.value.notes, this.createForm.value.phoneNumber, this.createForm.value.email, this.createForm.value.monthlySalary,  this.createForm.value.iban, this.createForm.value.country);
      

    this.doctorService.addDoctor(doctor);

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