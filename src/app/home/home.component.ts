import { Component, OnInit, Inject } from '@angular/core';
import { Country } from '../shared/country';
import { COUNTRIES } from '../shared/countries';
import { TestService } from '../services/test.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restResponse : Country[];
 countries: Country[];
 
       
  constructor(private testService : TestService) { }


  ngOnInit() {
     
  //  this.testService.getCountries().subscribe(restResponse => this.restResponse = restResponse);
  this.testService.getCountries().subscribe(countries => this.countries = countries);
console.log("testttttt",this.countries);
  }


}
