import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument }
  from 'angularfire2/firestore';
import { ResourcesInterface } from '../models/resources-interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  resourcesCollection: AngularFirestoreCollection<ResourcesInterface>;
  // resources: Observable<ResourcesInterface[]>;
  public resources: any;
  resourcesDoc: AngularFirestoreDocument<ResourcesInterface>;

  constructor(public afs: AngularFirestore) { 
    this.resourcesCollection = afs.collection<ResourcesInterface>('resources', ref => ref.where('active', '==', true));
    this.resourcesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ResourcesInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(resources => {
        this.resources = resources;
    });
  }

  // constructor(public afs: AngularFirestore) { 
  //   this.resourcesCollection = afs.collection<ResourcesInterface>('resources', ref => ref.orderBy('date', 'desc'));
  //   this.resources = this.resourcesCollection.snapshotChanges().pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as ResourcesInterface;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     }))
  //   );
  // }

  /* getResources() {
    return this.resources;
  } */
}
