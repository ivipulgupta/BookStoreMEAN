import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() content: any; 

  constructor() { }

  ngOnInit(): void {
  }
  aboutInfo = [
    {
        name: 'Game Street',
        description: "Welcome to The Game Street, the UK's trusted online games retailer. We've been selling online since July 2021 and our aim is to bring you a comprehensive range of new releases, back catalogue and pre-owned games for all current formats. We also offer a range of gaming related clothing and other merchandise perfect for gifts or just treating yourself!",
        
    
    }
];


socialUrls = [
  {
    name:"facebook",
    faclass:"fa-facebook-square",
     url: "https://www.instagram.com/"
  },
  {
    name:"pinterest",
    faclass:"fa-pinterest",
     url: "https://www.pinterest.ca/"
 },
 {
  name:"linkedin",
    faclass:"fa-linkedin-square",
     url: "https://www.linkedin.com/"
},
{
  name:"twitter",
  faclass:"fa-twitter-square",
  url:"https://twitter.com/"
}
];

}
