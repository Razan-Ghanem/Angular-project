import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Appointment } from "../models/appointment";
import { LoggingService } from "./logging.service";
import { environment } from "src/environments/environment";
import { map, tap } from "rxjs/operators";
import { Doctor } from "../models/doctor";


@Injectable({
    providedIn:'root'
})
export class HomeService{

    public appointments: Appointment[] = [];
    constructor(private logService:LoggingService, private httpClient:HttpClient){

    }

    getAppointments(){
        return this.httpClient.get(environment.WebApiUrl + "/Appointments")
        .pipe(
            map((response:{[key:string]: any})=>{
           
                let result:Appointment[] = [];
              

            for(let key in response){
                if(response.hasOwnProperty(key))
                    {
                        let appointment = new Appointment();
                        Object.assign(appointment,response[key]);
                        appointment.key = key;
                        result.push(appointment);
                    }
            }
            this.appointments = result;
            console.log(result);

            return result;

        }),
        tap(response =>{
            console.log('Tap Operator');
                console.log(response);
        }))

    }   
}