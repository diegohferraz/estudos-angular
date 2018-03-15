import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { JwtHelper } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt'

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials)).map(response => {
        let result = response.json();

        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }

        return false;

      });
  }

  logout() { 

    localStorage.removeItem('token');

  }

  isLoggedIn() { 

    console.log("TOKEN NOT EXPIRED "+ tokenNotExpired());
    return tokenNotExpired();

    /*let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');

    if (!token){
      return false;
    }

    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    console.log("Expiration: "+expirationDate);
    console.log("IsExpired: "+isExpired);

    return !isExpired;*/
  }

  get currentUser() {

    let token = localStorage.getItem('token');
    if (!token) return null;

    console.log(new JwtHelper().decodeToken(token));

    return new JwtHelper().decodeToken(token);

  }

}

