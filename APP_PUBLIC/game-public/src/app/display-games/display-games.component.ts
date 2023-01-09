import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameServiceService } from "../game-service.service";

@Component({
  selector: 'app-display-games',
  templateUrl: './display-games.component.html',
  styleUrls: ['./display-games.component.css'],
  providers: [GameServiceService]
})
export class DisplayGamesComponent implements OnInit {
  public games: Game[] = []
  constructor( private gameService: GameServiceService) {  }

  ngOnInit(): void {
    this.gameService
      .getGames() 
      .then(games =>{
        this.games = games as Game[];
      });
    }

}
