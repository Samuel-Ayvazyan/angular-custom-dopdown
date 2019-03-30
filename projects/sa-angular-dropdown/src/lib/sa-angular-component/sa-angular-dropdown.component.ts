import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sa-angular-dropdown',
  templateUrl: './sa-angular-dropdown.component.html',
  styleUrls: ['./sa-angular-dropdown.component.css']
})
export class SaAngularDropdownComponent implements OnInit {

  public _selectedValue: any = { value: null, text: 'Select' };
  public _showDropdown: boolean = false;

  @Input() options: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  public changeSelected(option, $event) {
    this._selectedValue = option;
    this._showDropdown = false;
    $event.stopPropagation();
  }
}
