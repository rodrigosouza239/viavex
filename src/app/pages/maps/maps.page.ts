import { Component} from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core'

declare var google:any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage {

  map:any;
  @ViewChild('map', {read:ElementRef, static:false}) mapRef:ElementRef;

  constructor() { }

  ionViewDidEnter(){
    this.showMap();
  }

   showMap(){
     const location = new google.maps.LatLng(-3.0925805,-59.9446353);
     const options = {
       center: location,
       zoom:15,
       disableDefaultUI:true
     }
     this.map = new google.maps.Map(this.mapRef.nativeElement, options)
   }

}
