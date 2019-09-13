import { Injectable } from '@angular/core';
import { CARDS } from './Card/Mock-Cards'
import { Card } from './Card/Card' 
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardsUrl = 'api/cards';  // URL to web in memory api

  private actualCardsUrl = 'https://1n72laa2a5.execute-api.us-east-1.amazonaws.com/Prod/api/cardinfo'; //URL to actual api

  constructor(public messageService: MessageService, private http: HttpClient) { }

  getCards(): Observable<Card[]> {

    this.messageService.add('Message Service: Retrieved Cards');
    return this.http.get<Card[]>(this.actualCardsUrl)
    .pipe(
      tap(_ => this.log('fetched cards')),
      catchError(this.handleError<Card[]>('getCards', []))
    );
  }


  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`CardService: ${message}`);
}

  /** GET hero by id. Will 404 if id not found */
getCard(id: number): Observable<Card> {
  const url = `${this.actualCardsUrl}/${id}`;
  return this.http.get<Card>(url).pipe(
    tap(_ => this.log(`fetched card id=${id}`)),
    catchError(this.handleError<Card>(`getcard id=${id}`))
  );
}


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
