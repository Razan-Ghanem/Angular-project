import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../models/patient';
import { PatientsService } from '../services/patients.services';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  createForm:FormGroup;

  constructor(private patientService: PatientsService) { }

  ngOnInit(): void {

    this.createForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
      }),
      phoneNumber: new FormControl(),
      email: new FormControl(null, [Validators.required, Validators.email,this.restrictedemails]),
      address: new FormControl(),
      ssn: new FormControl(),
      country: new FormControl(),
      age: new FormControl(),
      gender: new FormControl()
    })
  }

  onSubmit(){

    if(!this.createForm.valid)
      return;

      let patient = new Patient(this.patientService.patients.length + 1, this.createForm.value.fullNamefirstName, this.createForm.value.fullName.lastName, this.createForm.value.phoneNumber, this.createForm.value.email, this.createForm.value.address, this.createForm.value.ssn, this.createForm.value.country, this.createForm.value.age);
    patient.gender = this.createForm.value.gender;

    this.patientService.addPatient(patient);

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