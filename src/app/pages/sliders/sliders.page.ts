import { Component} from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core'
import { Router } from '@angular/router';

declare var google:any;
@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.page.html',
  styleUrls: ['./sliders.page.scss'],
})
export class SlidersPage{
  map:any;
  @ViewChild('map', {read:ElementRef, static:false}) mapRef:ElementRef;

   slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private router: Router) { }

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

  btn(){
    this.router.navigateByUrl('login')
  }


}
