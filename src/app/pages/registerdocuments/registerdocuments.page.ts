import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerdocuments',
  templateUrl: './registerdocuments.page.html',
  styleUrls: ['./registerdocuments.page.scss'],
})
export class RegisterdocumentsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerhome(){
    this.router.navigateByUrl('registerhome')
  }

}
