import { Component, OnInit } from '@angular/core';
import { ContactInfoService } from '../../services/contact-info.service';
import { ContactInfoInterface } from '../../models/contact-info-interface';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('contact-info').valueChanges();
    console.log(this.items);
  }

  // public contactInfo = [];
  /* contactInfo: ContactInfoInterface[];
  constructor( private contactInfoService: ContactInfoService ) { } */

  ngOnInit() {
    // this.getInfo();
    /* this.contactInfoService.getContactInfo().subscribe((infoSnapshot) => {
      this.contactInfo = [];
      infoSnapshot.forEach((dataContact: any) => {
        this.contactInfo.push({
          id: dataContact.payload.doc.id,
          data: dataContact.payload.doc.data()
        });
      })
    }); */
  }

  /* getInfo(){
    console.log("hello");
    this.contactInfoService.getContactInfo().subscribe(contactInfo => this.contactInfo = contactInfo);
  } */

}
