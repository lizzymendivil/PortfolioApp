import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore'

import { Observable } from 'rxjs';
import { ContactInfoInterface } from '../models/contact-info-interface';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
  infoDoc: AngularFirestoreDocument<ContactInfoInterface>;

  constructor( private firestore: AngularFirestore ) { }

  /* public getContactInfo(documentId: string) {
    return this.firestore.collection('contact-info').doc(documentId).snapshotChanges();
  } */

  getContactInfo(id: string) {
    this.infoDoc = this.firestore.doc<ContactInfoInterface>(`contact-info/${id}`)
    return this.infoDoc.valueChanges()
  }

  public addMessage(data: {name: string, email: string, message: string}) {
    return this.firestore.collection('messages').add(data);
  }

}
