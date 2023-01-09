import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameServiceService } from "../game-service.service";

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [GameServiceService]
})
export class HomeListComponent implements OnInit {
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
