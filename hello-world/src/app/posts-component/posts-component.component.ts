import { Component, OnInit } from '@angular/core';
import { PostService } from './../post.service';
import { AppError } from './../app-error';
import { NotFoundError } from './../not-found-error';
import { BadInput } from './../bad-input';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponent implements OnInit{

	posts: any[];
	

	constructor(private service: PostService){

	}

	ngOnInit(){

		this.service.getAll().subscribe(
			posts => this.posts = posts
			);

	}


	createPost(input: HTMLInputElement){
		
		let post = {title: input.value}
		this.posts.splice(0,0,post);
		input.value = '';

		this.service.create(post).subscribe(
			response => {
				post['id'] = response.json().id;
			},
			error => {
				this.posts.splice(0,1);

				if(error instanceof BadInput){
					alert("Error 400");
				}else throw error;

				console.log(error);
		});

	}

	updatePost(post) {

		this.service.update(post).subscribe(response => {
			console.log(response.json());
		});

	}

	deletePost(post) {
		let index = this.posts.indexOf(post);
		this.posts.splice(index, 1);

		this.service.delete(post.id).subscribe(
			response => {
				console.log(response.json());
			},
			error => {
				this.posts.splice(index,0,post);

				if(error instanceof NotFoundError){
					alert("Error 404");
				}else throw error;
				console.log(error);
		});

	}

}
