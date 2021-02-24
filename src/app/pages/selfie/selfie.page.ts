import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.page.html',
  styleUrls: ['./selfie.page.scss'],
})
export class SelfiePage implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  selfie(){
    this.router.navigate(['registerdocuments']);
  }

}
