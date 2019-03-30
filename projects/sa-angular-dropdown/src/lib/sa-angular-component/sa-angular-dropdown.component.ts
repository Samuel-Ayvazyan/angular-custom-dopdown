import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-angular-dropdown',
  templateUrl: './sa-angular-dropdown.component.html',
  styleUrls: ['./sa-angular-dropdown.component.css']
})
export class SaAngularDropdownComponent implements OnInit {

  public selectedValue: string = 'Select';
  public options: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
