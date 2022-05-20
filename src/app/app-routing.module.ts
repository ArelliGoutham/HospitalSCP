import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorPortalComponent } from './doctor-portal/doctor-portal.component';
import { FindDoctorComponent } from './find-doctor/find-doctor.component';
import { FindPatientComponent } from './find-patient/find-patient.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: "welcome", component: WelcomePageComponent },
  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: "appointment", component: AppointmentPageComponent },
      { path: "find-doctor", component: FindDoctorComponent },
      { path: "find-patient", component: FindPatientComponent },
      { path: "doctor-portal", component: DoctorPortalComponent },
      { path: "admin-portal", component: AdminPortalComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
