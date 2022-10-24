import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Token } from './core/models/firebase/token.model';

import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'to do list';
  message: any = null;

  // private tokenCollections: AngularFirestoreCollection<Token>;

  constructor(
    private swUpdate: SwUpdate,
    private _snackBar: MatSnackBar,
    // private firestore: AngularFirestore
  ) {
    // this.tokenCollections = this.firestore.collection<Token>('tokens');
  }

  ngOnInit(): void {

        const app = initializeApp(environment.firebase);

    this.updatePWA();

    this.requestPermission(app);
    this.listenNotifications(app);
  }

  requestPermission(app: any) {
    const messaging = getMessaging(app);

    getToken(messaging,
      { vapidKey: environment.firebase.vapidKey }).then(
        (currentToken) => {
          if (currentToken) {
            console.log("token.....");
            console.log(currentToken);
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
  }

  listenNotifications(app: any) {
    const messaging = getMessaging(app);

    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message = payload;
    });
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
