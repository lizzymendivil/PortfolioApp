import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoService {

  constructor( private firestore: AngularFirestore ) { }

  public getGeneralInfo() {
    return this.firestore.collection('general-info').snapshotChanges();
  }
}
