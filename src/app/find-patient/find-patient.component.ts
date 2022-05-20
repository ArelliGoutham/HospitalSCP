import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../data/data-models';

@Component({
  selector: 'app-find-patient',
  templateUrl: './find-patient.component.html',
  styleUrls: ['./find-patient.component.css']
})
export class FindPatientComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.patientForm = new FormGroup({
      'patientId': new FormControl(null, Validators.required)
    })
  }

  patientForm: FormGroup;
  ngOnInit(): void {
    // this.patientForm = new FormGroup({
    //   'patientId'
    // })
  }

  submit() {
    if (this.patientForm.value.patientId !== null) {
      let url: string = "http://localhost:8059/patient/" + this.patientForm.value.patientId;
      this.http.get<Patient>(url, {
        observe: "response"
      }).subscribe(resp => {
        console.log(resp);
      })
    }
  }

}
