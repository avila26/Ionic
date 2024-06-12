import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/home')
  }
}
