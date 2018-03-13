import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  isFavorite = true;

  onFavoriteChanged(valor){
  	alert('favorite changed '+valor);
  }

}