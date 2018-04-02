import { trigger, state, style, transition, animate } from '@angular/animations';

export const clickedStateTrigger = trigger('clickedState', [
  state('default', style({
    backgroundColor: 'orange',
    width: '100px',
    height: '100px'
  })),
  state('clicked', style({
    backgroundColor: 'blue',
    width: '300px',
    height: '50px'
  })),
  state('mousedown', style({
    backgroundColor: 'red',
    border: '1px solid black',
    width: '100px',
    height: '100px'
  })),
  transition('default => clicked', animate('1s 100ms ease-in')),
  transition('clicked => default', animate(300)),
  transition('mousedown <=> clicked', animate(300))
]);
  
export const numberEnteredStateTrigger = trigger('numberEnteredState', [
  state('unselected', style({
    border: '1px solid black',
    padding: '5px',
    backgroundColor: 'white'    
  })),
  state('selected', style({
    border: '2px solid blue',
    padding: '4px',
    backgroundColor: 'lightblue'
  })),
  transition('unselected => selected', [
    style({
      border: '2px solid black',
      padding: '4px'
    }),
    animate('600ms 100ms ease-out', style({
      backgroundColor: 'red',
      transform: 'scale(1.05)'
    })),
    animate(300)
  ])
]);

export const markedTrigger = trigger('markedState', [
  state('default', style({
    border: '1px solid black',
    backgroundColor: 'transparent',
    padding: '20px'
  })),
  state('marked', style({
    border: '2px solid blue',
    backgroundColor: '#caeff9',
    padding: '19px'                
  })),
  transition('default => marked', [
    style({
      border: '2px solid black',
      padding: '19px'
    }),
    animate('200ms ease-out', style({
      transform: 'scale(1.05)'
    })),
    animate(300)
  ]),
  transition('marked => default', [
    style({
      border: '2px solid blue',
      padding: '20px'
    }),
    animate('300ms ease-out')
  ])
]);

export const itemStateTrigger = trigger('itemState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    animate('500ms ease-out', style({
      opacity: 1,
      transform: 'translateX(0)'
    }))
  ]),
  transition(':leave', [
    animate('500ms ease-in', style({
      opacity: 0,
      transform: 'translateX(100%)'
    }))
  ])
]);