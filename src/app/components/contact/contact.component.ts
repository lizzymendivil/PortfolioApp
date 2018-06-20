import { Component, OnInit } from '@angular/core';
import { ContactInfoService } from '../../services/contact-info.service';
import { ContactInfoInterface } from '../../models/contact-info-interface';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // public _contact_info: Observable<ContactInfoInterface>;
  // public _contact_info: any;
  info: ContactInfoInterface;
 
  // constructor( private db: AngularFirestore, private contactInfoService: ContactInfoService) { }
  constructor(private contactInfoService: ContactInfoService) { }

  ngOnInit() {
    /* this.contactInfoService.getContactInfo('KaQvx6JUv4ecSjesM8XF').subscribe((info) => {

    }) */

    /* this.db.doc('contact-info/KaQvx6JUv4ecSjesM8XF').valueChanges().subscribe(item => {
      this._contact_info = item
    }) */

    // this._contact_info = this.db.doc('contact-info/KaQvx6JUv4ecSjesM8XF').valueChanges();

    this.getContactInfo();
  }

  getContactInfo(): void {
    const id = 'KaQvx6JUv4ecSjesM8XF';
    this.contactInfoService.getContactInfo(id).subscribe(info => (this.info = info));
  }

}
