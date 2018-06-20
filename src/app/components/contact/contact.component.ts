import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

import { patternValidator } from '../../shared/pattern-validator';
import { ContactInfoService } from '../../services/contact-info.service';
import { ContactInfoInterface } from '../../models/contact-info-interface';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // public _contact_info: Observable<ContactInfoInterface>;
  public _contact_info: any;
  info: ContactInfoInterface;
 
  // constructor( private db: AngularFirestore, private contactInfoService: ContactInfoService) { }

  public messages = [];
  public newMessageForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    message: new FormControl('', Validators.required)
  });

  constructor(private db: AngularFirestore, private contactInfoService: ContactInfoService, private toastr: ToastrService) {
    this.newMessageForm.setValue({
      name: '',
      email: '',
      message: ''
    });

   }

  ngOnInit() {
    /* this.contactInfoService.getContactInfo('KaQvx6JUv4ecSjesM8XF').subscribe((info) => {

    }) */

    /* this.db.doc('contact-info/KaQvx6JUv4ecSjesM8XF').valueChanges().subscribe(item => {
      this._contact_info = item
    }); */

    this._contact_info = this.db.doc('contact-info/KaQvx6JUv4ecSjesM8XF').valueChanges();

    // this.getContactInfo();
  }

  getContactInfo(): void {
    const id = 'KaQvx6JUv4ecSjesM8XF';
    this.contactInfoService.getContactInfo(id).subscribe(info => (this.info = info));
  }

  public newMessage(form, documentId = null) {
      let data = {
        name: form.name,
        email: form.email,
        message: form.message
      }
      this.contactInfoService.addMessage(data).then(() => {
        this.toastr.success('Your message was submitted successfully.');
        this.newMessageForm.reset();
        this.newMessageForm.setValue({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.error(error);
      });
  }

}
