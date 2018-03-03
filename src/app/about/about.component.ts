import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../shared/country';
import { COUNTRIES } from '../shared/countries';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  country: Country[];
  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.country = params['country']; // (+) converts string 'id' to a number
       console.log("testtttttt2222222222",this.country);

       // In a real app: dispatch action to load the details here.
    });
  }

}
