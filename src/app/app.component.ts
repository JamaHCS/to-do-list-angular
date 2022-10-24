import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, tap } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'to do list';

  constructor(private swUpdate: SwUpdate, private _snackBar: MatSnackBar){}
  
  ngOnInit(): void {
    this.updatePWA();
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
