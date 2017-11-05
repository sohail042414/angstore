import { Component, OnInit } from '@angular/core';
import { ApplicationListComponent } from './application/application-list/application-list.component';
import { ApplicationDetailComponent } from './application/application-detail/application-detail.component';



@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
