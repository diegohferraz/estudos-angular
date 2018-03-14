import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile-component',
  templateUrl: './github-profile-component.component.html',
  styleUrls: ['./github-profile-component.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private anotherRouter: Router) { }

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
  		alert("VALOR: " + params.get('username'));
  	});
  }

  submit() {
  	this.anotherRouter.navigate(['/followers'], {
  		queryParams: {page: 1, order: 'latest'}
  	});
  }

}
