import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class FavoriteComponent implements OnInit {

	@Input('is-favorite') isSelected: boolean;
	@Output('change') change = new EventEmitter();

	constructor() { }

	ngOnInit() {

	}

	onClick() {
		this.isSelected = !this.isSelected;

		let teste = "teste do diego";

		this.change.emit(teste);
	}

}
