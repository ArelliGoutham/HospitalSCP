import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../data/data-models';
import { DataStorageService } from '../data/data-storeage.service';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {

  isPescriptionEnabled: boolean = false;
  patientDetails: Patient;

  prescriptionForm!: FormGroup;
  constructor(private dataStore: DataStorageService, private http: HttpClient) {
    this.patientDetails = dataStore.getPatientDetails();
    console.log(this.patientDetails)
    if (dataStore.findPatientSelected) {
      this.isPescriptionEnabled = false;
    }
    else {
      this.isPescriptionEnabled = true;
    }

    this.prescriptionForm = new FormGroup({
      "id": new FormControl(this.patientDetails.id),
      "prescription": new FormControl(this.patientDetails.prescription, Validators.required),
    })
  }

  ngOnInit(): void {
  }

  getPatientDetails(): Patient {
    return this.patientDetails;
  };
  getPescriptionEnabled(): boolean {
    if (this.dataStore.findPatientSelected) {
      return true;
    }
    else {
      return false;
    }
  }

  savePrescription() {

    this.http.patch("http://localhost:8059/prescription", this.prescriptionForm.value, {
      observe: "response"
    }).subscribe(resp => {
      if (resp.status == HttpStatusCode.Ok) {
        alert("Prescription Updated");
      }
    })
    console.log(this.prescriptionForm.value);
  }
}
