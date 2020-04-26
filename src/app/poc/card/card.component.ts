import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  products = [ 
    { id: 1, name:'tomato', url:'assets/images/tomato.jpg' },
    { id: 1, name:'bellpepper', url:'assets/images/bellpepper.jpg' },
    { id: 1, name:'chilli', url:'assets/images/chilli.jpg' },
    { id: 1, name:'brinjal', url:'assets/images/brinjal.jpg'},
    { id: 1, name:'carrot', url:'assets/images/carrot.jpg' },
    { id: 1, name:'corn', url:'assets/images/corn.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
