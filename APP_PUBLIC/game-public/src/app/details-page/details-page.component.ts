import { Component, OnInit } from '@angular/core';
import { Game } from '../game'; 
import { GameServiceService } from '../game-service.service';
import { switchMap } from 'rxjs/operators'; 
import { ActivatedRoute, Params } from '@angular/router'; 
 


@Component({ 
  selector: 'app-details-page', 
  templateUrl: './details-page.component.html', 
  styleUrls: ['./details-page.component.css'], 
  providers: [GameServiceService] 
}) 
export class DetailsPageComponent implements OnInit {

  pageContent = { 
    header: { 
      title: '', body: '' 
    } 
  }; 
  

  public newGame = new Game(); 
  constructor(private gameService: GameServiceService, private route: ActivatedRoute) { } 
 
ngOnInit(): void { 

  const gameid = this.route.snapshot.paramMap.get('gameid');

    this.route.params.pipe(switchMap((params: Params) => { 
      return this.gameService.getSingleGame(params['gameid']); 
    })) 
    // tbiskfoodService.getSingleFood(gameid as string)
    //   .then(good => {
    //     this.newBook = Food as unknown as Food;
    //     this.pageContent.header.title = this.newBook.name;
    //     this.pageContent.header.body = "Details for selected food.";

      .subscribe((newGame) => { 
        console.log('Selected Game', newGame); 
        this.newGame = newGame as Game; 
        this.pageContent.header.title = this.newGame.name; 
        this.pageContent.header.body = 'Details for selected Food.'; 
      }); 
  }

}
