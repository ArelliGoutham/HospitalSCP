import { Injectable } from '@angular/core';
import { Doctor, DoctorPatientCount, Patient } from './data-models';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }
  // -------------------------//
  private doctorPatientCount!: DoctorPatientCount;

  public getDoctorPatientCount(): DoctorPatientCount {
    return this.doctorPatientCount;
  }

  public setDoctorPatientCount(v: DoctorPatientCount) {
    this.doctorPatientCount = v;
  }
  //-------------------------//

  private patientDetails!: Patient;


  public getPatientDetails(): Patient {
    return this.patientDetails;
  }


  public setPatientDetails(v: Patient) {
    this.patientDetails = v;
  }

  // Tab selected//
  findPatientSelected: boolean = false;
  doctorPortalSelected: boolean = false;
}
