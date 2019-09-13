import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../Card/Card';
import {CardService} from '../card.service';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  card: Card;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location
  ) { }

  
  getCard(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cardService.getCard(id)
      .subscribe(card => this.card = card);
}

    ngOnInit(): void {
      this.getCard();
    }
    
    

  goBack(): void {
    this.location.back();
  }

}
