import {Component, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {DealerSearchAPI} from "../../Services/dealersearch.api.service";
import {AppConfig} from "../../app.config";

@Component({
  selector: '[maps-google]',
  template: require('./maps-google.template.html'),
  styles: [`
      sebm-google-map { height: 100%} 
      .map-row-height {height:400px; width: 100%;}
      .input-width {width: 200px;}
      .form-zindex {z-index: 1;}
      .form-background-color {background-color: #eee;}
    `]
})

export class MapsGoogle {

  constructor(private dataProvider:DealerSearchAPI) {}

  lat: number = 37.7749;
  lng: number = -122.431297;
  zoom: number = 12;

  addMarker(m : marker) {
    this.markers.push(m);
  }
  markers: marker[] = [];

  onFormSubmit(f): void {
    console.log(f.value.search );

    this.dataProvider.getDealersWithinARadiusOfZip(Number(f.value.search),10).subscribe(
      (response) =>
      {
        var data = JSON.parse(response._body)
        for(var i=0 ; i < data.dealers.length;i++) {
          this.addMarker({lat:data.dealers[i].address.latitude,lng:data.dealers[i].address.longitude,content:data.dealers[i].name});
          this.lat = data.dealers[i].address.latitude;
          this.lng = data.dealers[i].address.longitude;
        }
      },
      (error) => console.log(error)
    );
  }
}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  content?: string;
  draggable: boolean;
}
