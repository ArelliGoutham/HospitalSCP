import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http'
import { Doctor } from '../data/data-models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-doctor',
  templateUrl: './find-doctor.component.html',
  styleUrls: ['./find-doctor.component.css']
})
export class FindDoctorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  list: Doctor[] = [];

  doctorForm!: FormGroup;
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
    if (this.doctorForm.value.doctorId !== null) {
      let url: string = "http://localhost:8061/doctor/" + this.doctorForm.value.doctorId;
      this.http.get(url).subscribe(resp => {
        console.log(resp);
      })
    }
  }
}
