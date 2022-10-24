import { endpoints } from './../../../global/endpoints';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from './../../models/activity/activity.model';
import { Observable , map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getRandomActivity(): Observable<Activity> {
    return this.http
      .get<Activity>(endpoints.randomActivityApi)
      .pipe(
        map((resp) => {
          return {
            activity: resp.activity,
            type: resp.type,
            participants: resp.participants,
            price: resp.price,
            link: resp.link,
            key: resp.key,
            accessibility: resp.accessibility
          }
        })
      );
  }
}
