import { Component } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes, useAnimation, query, animateChild, group, stagger } from '@angular/animations';
import { bounceOutLeftAnimation } from './../animations';

// void <=> * = :enter, :leave

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimations', [
        transition(':enter',[
          group([
            query('h1', [
              style({ transform: 'translateY(-20px)'}),
              animate(1000)
            ]),
            query('@todoAnimation', 
              stagger(200, animateChild())
            )
          ])
        ])
      ]),

      trigger('todoAnimation', [
          transition(':enter', [
            style({ opacity: 0 }),
            animate(1000),
          ]),
          transition(':leave', [
            style({ backgroundColor: 'red' }),
            animate(1000),
            useAnimation(bounceOutLeftAnimation)
          ])
      ])
  ]
})

export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event) {
    console.log("Started");
    console.log($event);
  }

  animationDone($event) {
    console.log("Done");
    console.log($event);
  }


}
