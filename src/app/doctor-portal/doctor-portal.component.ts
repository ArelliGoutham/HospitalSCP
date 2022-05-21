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
  constructor() {
    this.docValidateForm = new FormGroup({
      "id": new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }
  submit() {
    this.isDoctorValidated = true;



  }
}
