import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../game-service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game';
@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.css']
})
export class DeleteGameComponent implements OnInit {

  public newGame = new Game();

  constructor(private gameService: GameServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const gameid = this.route.snapshot.paramMap.get('gameid');

    this.gameService.deleteGame(gameid as string)
      .then(game => {
        console.log("deleting");
        this.newGame = game as Game; 
        window.location.href = "/list";
      });
  }
}
