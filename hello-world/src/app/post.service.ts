import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';


@Injectable()
export class PostService extends DataService {



  constructor(http: Http) { 
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

  /*----------- SEM Herança
	private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
  	return this.http.get(this.url);
  }

  createPost(post) {
  	return this.http.post(this.url, JSON.stringify(post)).catch((error: Response) => {
      if (error.status === 400)
        return Observable.throw(new BadInput(error.json()));

      return Observable.throw(new AppError(error.json()));

    });
  }

  updatePost(post) {
  	//this.http.put(this.url, JSON.stringify(post));
  	return this.http.patch(this.url + '/' + post.id , JSON.stringify({isRead: true}));
  }

  deletePost(postId) {
  	return this.http.delete(this.url + '/' + postId).catch(this.handleError);
  }

  private handleError(error: Response) {

    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));

  }
*/
  
}
