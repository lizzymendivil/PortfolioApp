import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { InformationService } from '../../services/information.service';

export interface Info { github: string; linkedin: string; subtitle: string; title: string; twitter: string; }

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private infoDoc: AngularFirestoreDocument<Info>;
  public _info: Observable<Info>;
  constructor(private afs: AngularFirestore, public _is:InformationService) {
    this.infoDoc = afs.doc<Info>('general-info/LkWgZj9TWqWFpSwq7v5M');
    this._info = this.infoDoc.valueChanges();
   }
  ngOnInit() {
  }

}
