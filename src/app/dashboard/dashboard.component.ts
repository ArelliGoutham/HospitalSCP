import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  bookAppointment() {
    this.router.navigate(['/dashboard/appointment'])
  }
  findDoctor() {
    this.router.navigate(['/dashboard/find-doctor'])

  }
  findPatient() {
    this.router.navigate(['/dashboard/find-patient'])

  }
  doctorPortal() {
    this.router.navigate(['/dashboard/doctor-portal'])

  }
  adminPortal() {

    this.router.navigate(['/dashboard/admin-portal'])
  }
}
