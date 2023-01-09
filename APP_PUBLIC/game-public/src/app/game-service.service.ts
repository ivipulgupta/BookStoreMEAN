import { Injectable } from '@angular/core';
import { Game } from './game';
import {HttpClient, HttpResponse} from "@angular/common/http"; 

@Injectable({
  providedIn: 'root'
})

export class GameServiceService { 
  private gamesUrl = 'http://localhost:3000/api/games';
  constructor(private http: HttpClient) {}
  getGames(): Promise<void | Game[]> {
    return this.http
      .get(this.gamesUrl)
      .toPromise()
      .then((response) => response as Game[])
      .catch(this.handleError);
  }
  getSingleGame(gameId: string): Promise<void | Game>{ 
    return this.http.get(this.gamesUrl + '/' + gameId) 
      .toPromise() 
      .then(response => response as Game) 
      .catch(this.handleError); 
  } 

  
  createGame(newGame: Game): Promise<void | Game> { 
    return this.http.post(this.gamesUrl, newGame) 
      .toPromise() 
      .then(response => response as Game) 
      .catch(this.handleError); 
  }



  updateGame(newGame: Game): Promise<void | Game> { 
    return this.http.put(this.gamesUrl+'/'+newGame._id, newGame) 
      .toPromise() 
      .then(response => response as Game) 
      .catch(this.handleError); 
  }

  deleteGame(gameId: string): Promise<void | Game> {
    return this.http.delete(this.gamesUrl + '/' + gameId)
      .toPromise()
      .then(response => response as Game)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log('error', error);
  }
}