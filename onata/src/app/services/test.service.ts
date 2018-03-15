import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Temperature }from '../shared/Temperature'
import { HttpmsgService }from './httpmsg.service';
import 'rxjs/add/operator/map';
//import { xml2js } from 'xml2js'
@Injectable()
export class TestService {
temperature:Temperature[];
res:any;
  constructor(private http:Http, private httpmsgService:HttpmsgService ) { }

  getreports(): Observable<Temperature[]>{
    var uri = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='california')";
    console.log("t111",uri);
    var resp = encodeURI(uri);
    console.log("testttt",resp);
    
  
    return this.http.get('https://query.yahooapis.com/v1/public/yql?q='+resp +'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
     .map(res => {return this.httpmsgService.extractData(res);});
    
    //  .map(res => {return this.res});
     


    
    }
    

    
};

