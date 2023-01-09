import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';
import { HomeListComponent } from './home-list/home-list.component';

import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FrameworkComponent } from './framework/framework.component';
import { APP_BASE_HREF} from '@angular/common';
import { DetailsPageComponent } from './details-page/details-page.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { DisplayGamesComponent } from './display-games/display-games.component';
import { UpdateGameComponent } from './update-game/update-game.component';
 
@NgModule({
  declarations: [
    HomeListComponent,

    DetailsPageComponent,
    FrameworkComponent,
    DeleteGameComponent,

    HeaderComponent,
    HomepageComponent,
    AboutComponent,
    FooterComponent,
    DisplayGamesComponent,
    UpdateGameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
     {
      path: '',
      component: HomepageComponent
     },
     {
      path: 'list',
      component: HomeListComponent
     },
     {
      path: 'display',
      component: DisplayGamesComponent
     },
     {
      path: 'about',
      component: AboutComponent
     },
     
    {
      path: 'games/delete/:gameid',
      component: DeleteGameComponent
    },
    {
      path: 'games/update/:gameid',
      component: UpdateGameComponent
    },

    { 
      path: 'games/:gameid', 
      component: DetailsPageComponent 
    }
   ])
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      bootstrap: [FrameworkComponent]
})
export class AppModule { }
