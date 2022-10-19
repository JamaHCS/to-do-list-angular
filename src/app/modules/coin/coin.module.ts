import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinRoutingModule } from './coin-routing.module';
import { MaterialModule } from '../../material/material.module';
import { ListCoinComponent } from './components/list-coin/list-coin.component';
import { CoinComponent } from './components/coin.component';


@NgModule({
  declarations: [
    ListCoinComponent,
    CoinComponent
  ],
  imports: [
    CommonModule,
    CoinRoutingModule,
    MaterialModule
  ]
})
export class CoinModule { }
