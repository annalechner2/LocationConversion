import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetLocationApiService {

  constructor(private http: HttpClient) {}

  getAddress(latlong: any){
    var url = "http://api.positionstack.com/v1/reverse?access_key=e6849ae198bcf75a40377b34f8ef0ad9&query=" + latlong;
    console.log(url);
    return this.http.get(url, {responseType: 'text'});
  }

  getLatLong(address: string){
    var url = "http://api.positionstack.com/v1/forward?access_key=e6849ae198bcf75a40377b34f8ef0ad9&query="+ address;
    console.log(url);
    return this.http.get(url, {responseType: 'text'});
  }

}
