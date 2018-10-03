import { Component, OnInit } from '@angular/core';
import { ResourcesInterface } from '../../models/resources-interface';
import { ResourcesService } from '../../services/resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  resources: ResourcesInterface[];

  constructor(public resourcesService: ResourcesService) {}

  ngOnInit() {
    /* this.resourcesService.getResources().subscribe(resources => {
      this.resources = resources;
      console.log('aqui no entra');
    }) */
  }
}
