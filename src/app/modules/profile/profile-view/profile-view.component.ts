import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  name : string = '';
  constructor(private router: ActivatedRoute, private _location: Location) {
  }
  
  ngOnInit(): void {
    this.name  = this.router.snapshot.paramMap.get('name') || 'Anónimo';
  }
  goBack(){
    this._location.back();
  }

}
