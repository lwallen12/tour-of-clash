import { Component, OnInit } from '@angular/core';
import { Card } from '../Card/Card';
import { CardService } from '../card.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardService: CardService ) { }

  cards: Card[];

  getCards(): void {
    this.cardService.getCards()
    .subscribe(cards => this.cards = cards);
  }




  ngOnInit() {
    this.getCards();
  }

  

}
