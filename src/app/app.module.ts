import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPrintModule } from 'ngx-print'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { FindDoctorComponent } from './find-doctor/find-doctor.component';
import { FindPatientComponent } from './find-patient/find-patient.component';
import { DoctorPortalComponent } from './doctor-portal/doctor-portal.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientCardComponent } from './patient-card/patient-card.component';
import { DoctorCardComponent } from './find-doctor/doctor-card/doctor-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    DashboardComponent,
    AppointmentPageComponent,
    FindDoctorComponent,
    FindPatientComponent,
    DoctorPortalComponent,
    AdminPortalComponent,
    PatientCardComponent,
    DoctorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
