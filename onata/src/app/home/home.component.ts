import { Component, OnInit, Inject } from '@angular/core';
import { TestService } from '../services/test.service';
import { Http, Response } from '@angular/http';
import { Temperature }from '../shared/Temperature';
//import { xml2js } from 'xml2js'
import { Observable } from 'rxjs/Observable';
import { HttpmsgService }from '../services/httpmsg.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reports:Temperature[];
location = 'Newyork';
constructor(private testService:TestService,
private http:Http,
private httpmsgService:HttpmsgService){}

  ngOnInit() {

this.testService.getreports().subscribe(reports =>{
      this.reports = reports
      console.log("testttttttttt",this.reports);
  });    

  }
    
onClickMe(data){
  if(data){
  this.location = data;
  }else{
  
    this.location = 'Newyork';
  }
console.log('data', data);
this.getData();

}
getData(){
//  alert('hey service hitting');

this.getreports().subscribe(reports =>{
      this.reports = reports
      console.log("testttttttttt",this.reports);
  });
  
}
getreports(): Observable<Temperature[]>{
console.log('dataaatta', this.location);

    var uri = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="+this.location+")";
    console.log("t111",uri);
    var resp = encodeURI(uri);
    console.log("testttt",resp);
   
      return this.http.get('https://query.yahooapis.com/v1/public/yql?q='+resp +'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
     .map(res => {return this.httpmsgService.extractData(res);});
    
     


    
    }
}
