import { Component, Input } from '@angular/core';

@Component({
  selector: 'zyppy',
  templateUrl: './zyppy.component.html',
  styleUrls: ['./zyppy.component.css']
})
export class ZyppyComponent{

  @Input('title') title: string;
  isExpanded: boolean;

  toggle(){
  	this.isExpanded = !this.isExpanded;
  }

}
