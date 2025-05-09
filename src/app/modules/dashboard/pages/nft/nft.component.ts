import { Component, OnInit } from '@angular/core';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftChartCardComponent } from '../../components/nft/nft-chart-card/nft-chart-card.component';
import { NftDualCardComponent } from '../../components/nft/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from '../../components/nft/nft-header/nft-header.component';
import { NftSingleCardComponent } from '../../components/nft/nft-single-card/nft-single-card.component';
import { Nft } from '../../models/nft';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  imports: [
    NftHeaderComponent,
    NftDualCardComponent,
    NftSingleCardComponent,
    NftChartCardComponent,
    NftAuctionsTableComponent,
  ],
})
export class NftComponent implements OnInit {
  nft: Array<Nft>;

  constructor() {
    this.nft = [
      {
        id: 34356771,
        title: 'Introduction à la maintenance',
        creator: '...',
        instant_price:0,
        price: 0,
        ending_in: 'Types de maintenance : adaptez votre stratégie',
        last_bid: 0,
        image: './assets/images/Quoi.jpg',
        avatar: './assets/images/logoMaint.jpg',
      },
      {
        id: 34356772,
        title: 'Tout savoir sur les outils de gestion de la maintenance industrielle',
        price: 548.79,
        last_bid:0,
        image: './assets/images/img3.jpg',
      },
      {
        id: 34356773,
        title: 'Tout savoir sur les méthodes de gestion de la maintenance industrielle',
        price: 0,
        last_bid: 0,
        image: './assets/images/img2.jpg',
      },
    ];
  }

  ngOnInit(): void {}
}
