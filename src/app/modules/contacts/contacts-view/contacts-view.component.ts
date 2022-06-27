import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.scss']
})
export class ContactsViewComponent implements OnInit {

  contactos: any;
  constructor(private router: Router, private _location:Location) { }

  ngOnInit(): void {
    this.contactos = [
      {
      name:'Juan',
      surname:'Perez',
      phone:'123456789',
      email:'juanPerez@gmail.com'
      },
      {
      name:'Álvaro',
      surname:'González',
      phone:'987654321',
      email:'alvaroGonzalez@gmail.com'
      },
      {
      name:'María',
      surname:'Ortega',
      phone:'554123654',
      email:'mariaOrtega@gmail.com'
      },
      {
      name:'Luis',
      surname:'Nieto',
      phone:'485283654',
      email:'luisNieto@gmail.com'
      },
  ]
  }
  goToProfile(name:string){
    this.router.navigate(['profile', name]);
  }
  goBack(){
    this._location.back();
  }
}
