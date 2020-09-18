import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  products = [ 
    { id: 1, name:'tomato', url:'assets/images/tomato.jpg' },
    { id: 1, name:'brinjal', url:'assets/images/brinjal.jpg'},
    { id: 1, name:'carrot', url:'assets/images/carrot.jpg' },
    { id: 1, name:'corn', url:'assets/images/corn.jpg' },
    { id: 1, name:'tomato', url:'assets/images/tomato.jpg' },
    { id: 1, name:'brinjal', url:'assets/images/brinjal.jpg'},
    { id: 1, name:'carrot', url:'assets/images/carrot.jpg' },
    { id: 1, name:'corn', url:'assets/images/corn.jpg' },
    { id: 1, name:'tomato', url:'assets/images/tomato.jpg' },
    { id: 1, name:'brinjal', url:'assets/images/brinjal.jpg'},
    { id: 1, name:'carrot', url:'assets/images/carrot.jpg' },
    { id: 1, name:'corn', url:'assets/images/corn.jpg' }
  ];

  cart = [
    { id: 1, name:'bellpepper', url:'assets/images/bellpepper.jpg' },
    { id: 1, name:'chilli', url:'assets/images/chilli.jpg' }

  ];

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }     

}
