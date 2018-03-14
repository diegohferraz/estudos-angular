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
export class PostsComponentComponent implements OnInit{

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
		input.value = '';

		this.service.create(post).subscribe(
			response => {
				post['id'] = response.json().id;
				this.posts.splice(0,0,post);
			},
			error => {
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

		this.service.delete(post.id).subscribe(
			response => {
				console.log(response.json());
				let index = this.posts.indexOf(post);
				this.posts.splice(index, 1);
			},
			error => {
				if(error instanceof NotFoundError){
					alert("Error 404");
				}else throw error;
				console.log(error);
		});

	}

}
