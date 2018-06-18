import { Component, OnInit } from '@angular/core';

import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _is:InformationService) { }

  ngOnInit() {
  }

}
