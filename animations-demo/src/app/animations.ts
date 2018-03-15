import { trigger, state, transition, style, animate, animation, useAnimation, keyframes } from '@angular/animations';

export let bounceOutLeftAnimation = animation(

	animate('0.5s 0.5s ease-in', keyframes([
		style({
			offset: .2,
			opacity: 1,
			transform: 'translateX(20px)'
		}),
		style({
			offset: 1,
			opacity: 0,
			transform: 'translateX(-100%)'
		})
	]))

);

export let fade = trigger('fade', [
	state('void', style( { opacity: 0 } ) ),
	transition(':enter, :leave', [
    	animate(500)
  	])
]);

export let slide = trigger('slide',[
	transition(':enter',[
		style({ transform: 'translateX(-20px)'}),
		animate(200)
	]), 
	transition(':leave',
		useAnimation(bounceOutLeftAnimation)
	)
]);