import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../data/data-models';

@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.css']
})
export class AppointmentPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  list: Doctor[] = [];

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
  }

}
