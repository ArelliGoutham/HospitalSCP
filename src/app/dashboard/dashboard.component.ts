import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../data/data-storeage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private dataStore: DataStorageService) { }

  ngOnInit(): void {
  }

  bookAppointment() {
    this.router.navigate(['/dashboard/appointment'])
  }
  findDoctor() {
    this.router.navigate(['/dashboard/find-doctor'])

  }
  findPatient() {
    this.dataStore.findPatientSelected = true;
    this.dataStore.doctorPortalSelected = false;

  }
  doctorPortal() {
    this.dataStore.doctorPortalSelected = true;
    this.dataStore.findPatientSelected = false;

  }
  adminPortal() {

    this.router.navigate(['/dashboard/admin-portal'])
  }
}
