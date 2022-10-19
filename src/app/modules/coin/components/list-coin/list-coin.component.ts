import { Component, Input } from '@angular/core';
import { Datum } from 'src/app/core/models/coin';

@Component({
  selector: 'app-list-coin',
  templateUrl: './list-coin.component.html',
  styleUrls: ['./list-coin.component.scss']
})
export class ListCoinComponent {

  @Input() dataSourceCoin: Datum[] = [];
  displayedColumns: string[] = ['posicion', 'nombre', 'fecha', 'acciones'];

}
