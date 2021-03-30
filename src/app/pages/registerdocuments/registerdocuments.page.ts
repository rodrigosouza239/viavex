import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registerdocuments',
  templateUrl: './registerdocuments.page.html',
  styleUrls: ['./registerdocuments.page.scss'],
})
export class RegisterdocumentsPage implements OnInit {

  constructor(private router: Router,private activaredRoute: ActivatedRoute) {}

  ngOnInit() {
  }

  registerhom1(){
    this.router.navigateByUrl('registerhome')
  }

}
