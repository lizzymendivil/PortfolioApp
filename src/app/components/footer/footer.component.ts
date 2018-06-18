import { Component, OnInit } from '@angular/core';

import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor( public _is:InformationService ) { }

  ngOnInit() {
  }

}
