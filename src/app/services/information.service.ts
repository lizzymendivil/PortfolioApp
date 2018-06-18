import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  info:any = {};
  loaded:boolean = false;

  constructor( public http:Http ) { 
    this.load_info();
  }

  public load_info(){
    this.http.get('assets/data/info.page.json')
    .subscribe(data => {
      this.loaded = true;
      this.info = data.json();
    });
  }
}
