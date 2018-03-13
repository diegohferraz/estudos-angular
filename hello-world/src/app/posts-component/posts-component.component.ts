import { Component, OnInit } from '@angular/core';
import { PostService } from './../post.service';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit{

	posts: any[];
	

	constructor(private service: PostService){

	}

	ngOnInit(){

		this.service.getPosts().subscribe(
			response => {
				this.posts = response.json();
			}, 
			error => {
				if(error.status === 404){
					alert("Error 404");
				}else{
					alert("An unexpected error ocorred.");
				}
				console.log(error);
			});

	}


	createPost(input: HTMLInputElement){
		
		let post = {title: input.value}
		input.value = '';

		this.service.createPost(post).subscribe(response => {
			post['id'] = response.json().id;
			this.posts.splice(0,0,post);
		});

	}

	updatePost(post) {

		this.service.updatePost(post).subscribe(response => {
			console.log(response.json());
		});

	}

	deletePost(post) {

		this.service.deletePost(post.id).subscribe(
			response => {
				console.log(response.json());
				let index = this.posts.indexOf(post);
				this.posts.splice(index, 1);
			},
			error => {
				if(error.status === 404){
					alert("Error 404");
				}else{
					alert("An unexpected error ocorred.");
				}
				console.log(error);
			}););

	}

}
