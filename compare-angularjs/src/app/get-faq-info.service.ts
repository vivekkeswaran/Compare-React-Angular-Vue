import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetFaqInfoService {

  constructor(private http:Http) {
  }

  getFaqInfo(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts');
  }
}
