import { Component } from '@angular/core';
import { InformationService } from './services/information.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
 
  constructor(public _is:InformationService) { 
  
  }
}
