import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  isAdminValidated: boolean = false;

  adminValidateForm: FormGroup;
  constructor(private http: HttpClient) {

    this.adminValidateForm = new FormGroup({
      "id": new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.http.post("http://localhost:8062/admin/" + this.adminValidateForm.value.id, null, {
      observe: "response"
    }).subscribe(resp => {
      if (resp.status == HttpStatusCode.Ok) {
        this.isAdminValidated = true;
      }
      else if (resp.status == HttpStatusCode.NotFound) {
        alert("Admin not Found")
      }
    })
  }
}
