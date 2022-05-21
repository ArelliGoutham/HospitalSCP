import { Component, OnInit } from '@angular/core';
import { DoctorPatientCount } from 'src/app/data/data-models';
import { DataStorageService } from 'src/app/data/data-storeage.service';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit {

  constructor(private dataStore: DataStorageService) { }

  private doctorDate!: DoctorPatientCount;
  ngOnInit(): void {
    this.doctorDate = this.dataStore.getDoctorPatientCount();
  }

  getDoctorDetails() {
    return this.doctorDate;
  }

}
