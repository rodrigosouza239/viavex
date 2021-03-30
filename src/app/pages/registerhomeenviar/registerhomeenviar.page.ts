import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registerhomeenviar',
  templateUrl: './registerhomeenviar.page.html',
  styleUrls: ['./registerhomeenviar.page.scss'],
})
export class RegisterhomeenviarPage implements OnInit {

  constructor(private router: Router,private activaredRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  registerhom1(){
    this.router.navigateByUrl('pageenviar')
  }

}
