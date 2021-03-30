import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';




@Component({
  selector: 'app-registerhomeselfie',
  templateUrl: './registerhomeselfie.page.html',
  styleUrls: ['./registerhomeselfie.page.scss'],
})
export class RegisterhomeselfiePage implements OnInit {


  constructor(public router: Router,private storage: Storage) { }

  ngOnInit() {
  }

  registerhom1(){
    this.router.navigateByUrl('selfiecamera')
  }

}
