import { Component} from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core'
import { Router } from '@angular/router';
@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.page.html',
  styleUrls: ['./sliders.page.scss'],
})
export class SlidersPage{
 

   slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private router: Router) { }


  btn(){
    this.router.navigateByUrl('login')
  }


}
