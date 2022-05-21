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
  constructor(private dataStore: DataStorageService) {
    this.patientDetails = dataStore.getPatientDetails();
    if (dataStore.findPatientSelected) {
      this.isPescriptionEnabled = false;
    }
    else {
      this.isPescriptionEnabled = true;
    }

    this.prescriptionForm = new FormGroup({
      "id": new FormControl(this.patientDetails.id),
      "prescription": new FormControl(null, Validators.required),
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
    alert("Prescription Saved");
    console.log(this.prescriptionForm.value);
  }
}
