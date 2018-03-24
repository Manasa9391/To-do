import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manasa',
  templateUrl: './manasa.component.html',
  styleUrls: ['./manasa.component.scss']
})
export class ManasaComponent implements OnInit {
goals:any;
  constructor(private route:ActivatedRoute,private router:Router,private _data:DataService) {
    this.route.params.subscribe(res=>console.log(res.id));
   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals=res);
  }

}
