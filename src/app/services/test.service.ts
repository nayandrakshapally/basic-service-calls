import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Country } from '../shared/country';
import { COUNTRIES } from '../shared/countries';
import { HttpmsgService } from './httpmsg.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';



@Injectable()
export class TestService {
  res:any;

  constructor(private http: Http, private httpmsgService: HttpmsgService) { }

  // getCountries(): Observable<Country[]> {
 
  //   return this.http.get('http://services.groupkt.com/state/get/IND/all')
  //                   .map(res => { return this.httpmsgService.extractData(res); });
                 
  // }
  //using observables locally
  getCountries(): Observable<Country[]> {
    return Observable.of(COUNTRIES);
  }

  
}

