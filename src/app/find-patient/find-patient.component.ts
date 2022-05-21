import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../data/data-models';
import { DataStorageService } from '../data/data-storeage.service';

@Component({
  selector: 'app-find-patient',
  templateUrl: './find-patient.component.html',
  styleUrls: ['./find-patient.component.css']
})
export class FindPatientComponent implements OnInit {

  constructor(private http: HttpClient, private dataStore: DataStorageService) {
    this.patientForm = new FormGroup({
      'patientId': new FormControl(null, Validators.required)
    })
  }

  patientForm: FormGroup;
  showPatientCard: boolean = false;
  ngOnInit(): void {
  }

  submit() {
    this.showPatientCard = false;
    if (this.patientForm.value.patientId !== null) {
      let url: string = "http://localhost:8059/patient/" + this.patientForm.value.patientId;
      this.http.get<Patient>(url, {
        observe: "response"
      }).subscribe(resp => {
        if (resp.status == HttpStatusCode.Ok && resp.body != null) {
          this.dataStore.setPatientDetails(resp.body);
          this.showPatientCard = true;
        }
        else if (resp.status == HttpStatusCode.NoContent) {
          alert("Patient Not Found.\nEnter correct patient id.")
        }
        console.log(resp);
      })
    }
  }

}
