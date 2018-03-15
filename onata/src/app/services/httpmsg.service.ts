import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class HttpmsgService {

  constructor() { }
public extractData(res:Response){
  console.log(res);
  let body = res.json();
  console.log(body);
  return body || {};
}

}
