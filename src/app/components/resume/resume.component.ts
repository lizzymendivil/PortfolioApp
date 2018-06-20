import { Component, OnInit } from '@angular/core';

import { CollapseModule, WavesModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public isCollapsed:any;
  constructor() { }

  ngOnInit() {
  }

}
