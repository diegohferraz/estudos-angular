import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  	Observable.combineLatest([
	  		this.route.paramMap,
	  		this.route.queryParamMap
  		]).subscribe(combined => {
  			let id = combined[0].get('id');
  			let page = combined[1].get('page');
  		});



  	//this.route.snapshot.paramMap.get('id');
  	//this.route.queryParamMap.subscribe();

  	//console.log("PAge: " + this.route.snapshot.queryParamMap.get('page'));



  } 

}
