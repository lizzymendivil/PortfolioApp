import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactInfoInterface } from '../models/contact-info-interface';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  infoCollection: AngularFirestoreCollection<ContactInfoInterface>;
  infoDoc: AngularFirestoreDocument<ContactInfoInterface>;
  alIlnfo: Observable<ContactInfoInterface[]>;
  info: Observable<ContactInfoInterface>;

  constructor( private firestore: AngularFirestore ) { }

  /* public getContactInfo() {
    return this.firestore.collection('contact-info').snapshotChanges();
  } */

  getContactInfo():Observable<ContactInfoInterface[]>{
    console.log('this.infoCollection' + this.infoCollection);
    this.alIlnfo = this.infoCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => { 
          const data = action.payload.doc.data() as ContactInfoInterface;
          console.log('data' + data);
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    return this.alIlnfo;
   }
}
