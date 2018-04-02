import { trigger, state, style, group, transition, animate } from '@angular/animations';

export const buttonStateTrigger = trigger('buttonState', [
  state('valid', style({
    backgroundColor: 'lightgreen',
    borderColor: 'green',
    color: 'green'
  })),
  state('invalid', style({
    backgroundColor: 'red',
    borderColor: 'darkred',
    color: 'white'    
  })),
  transition('invalid => valid', [
    group([
      animate(300, style({
        transform: 'scale(1.1)'
      })),
      animate(300, style({
        backgroundColor: 'green' 
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ]),
  transition('valid => invalid', [
    group([
      animate(300, style({
        transform: 'scale(1.1)'
      })),
      animate(300, style({
        backgroundColor: 'red' 
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ])
]);