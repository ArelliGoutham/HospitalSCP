import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-portal',
  templateUrl: './doctor-portal.component.html',
  styleUrls: ['./doctor-portal.component.css']
})
export class DoctorPortalComponent implements OnInit {

  docValidateForm: FormGroup;
  isDoctorValidated: boolean = false;
  constructor(private http: HttpClient) {
    this.docValidateForm = new FormGroup({
      "id": new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }
  submit() {

    this.http.post("http://localhost:8061/doctor/" + this.docValidateForm.value.id, null, {
      observe: "response",
    }).subscribe(resp => {
      if (resp.status == HttpStatusCode.Ok) {
        this.isDoctorValidated = true;
      }
      if (resp.status == HttpStatusCode.NotFound) {
        console.log("badre")
        alert("Not Authorized");
      }
    })



  }
}
