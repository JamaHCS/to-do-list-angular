import { Component, OnInit } from '@angular/core';
import { Datum } from 'src/app/core/models/coin';
import { CoinService } from 'src/app/core/services/coin/coin.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  listCoin: Datum[] = [];

  constructor(private coinService: CoinService) { }

  ngOnInit(): void {
    this.coinService.getMonedas().subscribe(
      resp => this.listCoin = resp
    );
  }
}
