import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http'
import { Doctor, DoctorPatientCount } from '../data/data-models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataStorageService } from '../data/data-storeage.service';

@Component({
  selector: 'app-find-doctor',
  templateUrl: './find-doctor.component.html',
  styleUrls: ['./find-doctor.component.css']
})
export class FindDoctorComponent implements OnInit {

  constructor(private http: HttpClient, private dataStore: DataStorageService) { }

  list: Doctor[] = [];

  doctorForm!: FormGroup;
  showDoctorCard: boolean = false;
  ngOnInit(): void {
    this.http.get<Doctor[]>("http://localhost:8061/doctors",
      {
        observe: "response"
      }).subscribe(resp => {
        if (resp.status == HttpStatusCode.Ok) {
          if (resp.body != null)
            this.list = resp.body;
        }
        console.log(resp);
      })

    this.doctorForm = new FormGroup({
      'doctorId': new FormControl(null, Validators.required)
    })
  }
  submit() {
    this.showDoctorCard = false;
    if (this.doctorForm.value.doctorId !== null) {
      let url: string = "http://localhost:8061/doctor/" + this.doctorForm.value.doctorId;
      this.http.get<DoctorPatientCount>(url, {
        observe: "response"
      }).subscribe(resp => {
        if (resp.status == HttpStatusCode.Ok && resp.body != null) {
          this.dataStore.setDoctorPatientCount(resp.body);
          this.showDoctorCard = true;
        }
        if (resp.status == HttpStatusCode.NoContent) {
          alert("Data Not available.\nSorry for the Inconvinence");
        }
        console.log(resp);
      })
    }
  }
}
