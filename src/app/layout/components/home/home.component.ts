import { Component } from '@angular/core';
import { images } from 'src/app/global/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly images = images;

}
