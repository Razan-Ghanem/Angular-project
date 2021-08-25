import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PatientItemComponent } from './patient-item/patient-item.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsHeaderComponent } from './patients-header/patients-header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AppHiddenDirective } from './directives/app-hidden.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { HomeComponent } from './home/home.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { AppRoutingModule } from './app.routing.module';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorItemComponent } from './doctor-item/doctor-item.component';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { DoctorHeaderComponent } from './doctor-header/doctor-header.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentItemComponent } from './appointment-item/appointment-item.component';
import { AppointmentCreateComponent } from './appointment-create/appointment-create.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { AppointmentHeaderComponent } from './appointment-header/appointment-header.component';



@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientItemComponent,
    PatientsHeaderComponent,
    HighlightDirective,
    AppHiddenDirective,
    ShortenPipe,
    HomeComponent,
    PatientDetailComponent,
    PatientEditComponent,
    PatientCreateComponent,
    DoctorsComponent,
    DoctorItemComponent,
    DoctorCreateComponent,
    DoctorHeaderComponent,
    DoctorDetailComponent,
    DoctorEditComponent,
    AppointmentsComponent,
    AppointmentItemComponent,
    AppointmentCreateComponent,
    AppointmentHeaderComponent,
    AppointmentDetailComponent,
    AppointmentEditComponent

  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 
    {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }