import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireMessaging } from "@angular/fire/compat/messaging";
// import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Token } from './core/models/firebase/token.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'to do list';

  // private tokenCollections: AngularFirestoreCollection<Token>;

  constructor(
    private swUpdate: SwUpdate,
    private _snackBar: MatSnackBar,
    private messaging: AngularFireMessaging,
    // private firestore: AngularFirestore
  ) {
    // this.tokenCollections = this.firestore.collection<Token>('tokens');
  }

  ngOnInit(): void {
    this.updatePWA();
    this.requestPermission();
    this.listenNotifications();
  }

  requestPermission() {
    this.messaging.requestToken.subscribe(token => {

      if (token) {
        console.log(token);
        // this.tokenCollections.add({ token });
      }
    })
  }

  listenNotifications() {
    this.messaging.messages.subscribe(res => {
      console.log(res);
    })
  }

  updatePWA() {
    this.swUpdate.versionUpdates
      .pipe(
        filter((evt: any): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        tap((evt: VersionReadyEvent) => {
          console.info(`currentVersion=[${evt.currentVersion?.hash} | latestVersion=[${evt.latestVersion?.hash}]`)
        })
      ).subscribe(evt => {
        const snack = this._snackBar.open('Update Available', 'Reload.', { duration: 0 })
        snack.onAction()
          .subscribe(() => {
            window.location.reload()
          })
      })
  }
}
