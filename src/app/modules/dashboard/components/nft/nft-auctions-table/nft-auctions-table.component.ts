import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Nft } from '../../../models/nft';
import { NftAuctionsTableItemComponent } from '../nft-auctions-table-item/nft-auctions-table-item.component';

@Component({
  selector: '[nft-auctions-table]',
  templateUrl: './nft-auctions-table.component.html',
  imports: [NgFor, NftAuctionsTableItemComponent],
})
export class NftAuctionsTableComponent implements OnInit {
  public activeAuction: Nft[] = [];

  constructor() {
    this.activeAuction = [
      {
        id: 1346771,
        nom: ' Benkahla',
        prenom: 'Roua',
        image:
          'https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
        email: 'rouabelkahla82@gmail.com',
       
      },
      {
        id: 1346772,
      
         nom: ' Ayari',
        prenom: 'Eya',
        image:
          'https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
        email: 'eyaayari@gmail.com',
      },
      {
        id: 1346780,
         nom: ' Missaoui',
        prenom: 'Alia',
        image:
          'https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
        email: 'aliarahmi@gmail.com',
      },
      {
        id: 1346792,
        nom: ' Yaccoubi',
        prenom: 'Takwa',
        image:
          'https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
        email: 'Yacoubitakwa@gmail.com',
      },
      {
        id: 1346792,
          nom: ' Torjmen',
        prenom: 'Louay',
        image:
          'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-No-Background.png',
        email: '@gmail.com',
      },
         {
        id: 1346792,
          nom: ' Jbeli',
        prenom: 'Abderhamen',
        image:
          'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-No-Background.png',
        email: '@gmail.com',
      },
    ];
  }

  ngOnInit(): void {}
}
