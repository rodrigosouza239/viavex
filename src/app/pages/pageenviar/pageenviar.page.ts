import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pageenviar',
  templateUrl: './pageenviar.page.html',
  styleUrls: ['./pageenviar.page.scss'],
})
export class PageenviarPage implements OnInit {

  constructor(private router: Router,private activaredRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  registerhom1(){
    this.router.navigateByUrl('pageendereco')
  }

}
