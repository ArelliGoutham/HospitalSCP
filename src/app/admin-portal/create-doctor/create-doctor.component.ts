import { HttpClient, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/data/data-models';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  createDoctorForm: FormGroup;
  constructor(private http: HttpClient) {
    this.createDoctorForm = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "age": new FormControl(null, Validators.required),
      "gender": new FormControl(null, Validators.required),
      "specialization": new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  createDoctor() {

    this.http.post<Doctor>("http://localhost:8061/doctor",
      this.createDoctorForm.value, {
      observe: "response"
    }).subscribe(resp => {
      if (resp.status == HttpStatusCode.Created) {
        alert("Doctor Created");
      }
      else if (resp.status == HttpStatusCode.BadRequest) {
        alert("Enter valid data");
      }
      else {
        alert("Server not working");
      }
    });

    console.log(this.createDoctorForm.value);
  }
}
