import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription, } from 'rxjs';
import { Appointment } from '../models/appointment';
import { HomeService } from '../services/home.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  appointments: Appointment[];
  error: string;

  private subscription:Subscription;

  constructor(private router:Router, private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getAppointments()
      .subscribe(response => {
        this.appointments = response;
      },
        (error: HttpErrorResponse) => {
          this.error = error.message;
        });;

  }

  onStop(){
    this.ngOnDestroy();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  

}