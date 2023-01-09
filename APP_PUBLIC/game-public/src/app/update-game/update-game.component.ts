import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Router } from 'express';
import { Router } from '@angular/router';
import { Game } from '../game';
import { GameServiceService } from '../game-service.service';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit {

  public editGame: Game = {
    _id: '',
    img:'',
    name: '',
    author: '',
    price: '',
    rating:'',
    genre: ''
  
  };

  constructor(private gameService: GameServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    const gameid = this.route.snapshot.paramMap.get('gameid');
  

    this.gameService.getSingleGame(gameid as string)
      .then(game => {
        this.editGame = game as Game;
      })
  }

  public updateGame(editGame: Game): void {

    debugger
    this.gameService.updateGame(editGame)
      .then(editGame => {
        console.log(editGame);
        if (editGame) {
          window.location.href = '/list';
          // this.router.navigate(['/']);
          // console.log(editGame);
          
        }
      })
  }
}