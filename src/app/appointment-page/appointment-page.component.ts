import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor, Patient } from '../data/data-models';
import { DataStorageService } from '../data/data-storeage.service';

@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.css']
})
export class AppointmentPageComponent implements OnInit {

  appointmentForm: FormGroup;
  constructor(private http: HttpClient, private dataStore: DataStorageService, private router: Router, private route: ActivatedRoute) {
    this.appointmentForm = new FormGroup({
      "name": new FormControl('', Validators.required),
      "age": new FormControl('', Validators.required),
      "dateOfVisit": new FormControl('', Validators.required),
      "visitedDoctor": new FormControl(null, Validators.required)
    })
  }

  list: Doctor[] = [];

  isAppointmentBooked: boolean = false;
  ngOnInit(): void {
    this.http.get<Doctor[]>("http://localhost:8061/doctors",
      {
        observe: "response"
      }).subscribe(resp => {
        if (resp.status == HttpStatusCode.Ok) {
          if (resp.body != null)
            this.list = resp.body;
        }
        // console.log(resp);
      })
  }
  private status!: boolean;
  findPatientDetails(id: number | undefined): Patient {
    let url: string = "http://localhost:8059/patient/" + id;
    this.http.get<Patient>(url, {
      observe: "response"
    }).subscribe(resp => {
      if (resp.status == HttpStatusCode.Ok && resp.body != null) {
        console.log(resp);
        this.dataStore.setPatientDetails(resp.body);
        console.log(this.dataStore.getPatientDetails());
        this.status = true;
      }
      else if (resp.status == HttpStatusCode.NoContent) {
        alert("Patient Not Found.\nEnter correct patient id.")
        this.status = false;
      }
      else {
        this.status = false;
      }
    })
    return this.dataStore.getPatientDetails();
  }
  count: number = 0
  bookAppointment() {

    this.dataStore.doctorPortalSelected = false;
    this.dataStore.findPatientSelected = true;
    this.isAppointmentBooked = false;
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value)

      let patientId: number;

      this.http.post<Patient>("http://localhost:8059/patient", this.appointmentForm.value, {
        observe: "response"
      }).subscribe(resp => {

        this.dataStore.setPatientDetails(this.findPatientDetails(resp.body?.id));
        this.router.navigate(['patient-card'], { relativeTo: this.route })
      })
      // patientId

    }
    else {
      alert("Enter correct data");
    }
    this.isAppointmentBooked = true;

  }

  getAppointmentBooked() {
    return this.isAppointmentBooked
  }
}

