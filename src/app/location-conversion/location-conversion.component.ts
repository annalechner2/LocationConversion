import { Component, OnInit } from '@angular/core';
import { GetLocationApiService } from '../get-location-api.service';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'location-conversion',
  templateUrl: './location-conversion.component.html',
  styleUrls: ['./location-conversion.component.css']
})
export class LocationConversionComponent implements OnInit {
  faQuestion = faQuestionCircle;
  Address1: string;
  Address2: string;
  City: string;
  State: string;
  Zip: string;
  Country: string;
  Latitude: any;
  Longitude: any;
  termsAccepted: boolean;
  message: string;
  isShown: boolean; 
  termsAcceptedTwo: boolean;

  RunLatLong(){
    this.message = "";
    this.isShown = ! this.isShown;
    var add = this.Address1 + " " + this.Address2 + " " +  this.City + " " + this.State + " " + this.Zip + " " + this.Country
    var newString = add.replace(/[ ,]+/g, "%");
    console.log(newString);
      this.api.getLatLong(add).subscribe(
        data =>{ console.log( data.toString());  this.message += " " + data.toString(); 
        }
      );
  }

  RunAddress(){
    this.message = "";
    this.isShown = ! this.isShown;
    var str = this.Latitude + "," + this.Longitude
    console.log(str);


      this.api.getAddress(str).subscribe(
        data =>{ console.log( data.toString());  
          this.message += " " + data.toString(); 
        }
      );
  }

  checkforvalidation(){
    this.termsAccepted = !this.termsAccepted;
  }

  checkforvalidationTwo(){
    this.termsAcceptedTwo = !this.termsAcceptedTwo;
  }
constructor(private api:GetLocationApiService){
  this.Address1 = "";
  this.Address2 = "";
  this.City = "";
  this.State = "";
  this.Zip = "";
  this.Country = "";
  this.Latitude = "";
  this.Longitude = "";
  this.termsAccepted = false;
  this.termsAcceptedTwo = false;
  this.message = "";
  this.isShown = false;
}

ngOnInit(){}

}