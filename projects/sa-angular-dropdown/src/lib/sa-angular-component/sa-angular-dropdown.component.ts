import { Component, OnInit, Input, HostListener, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sa-angular-dropdown',
  templateUrl: './sa-angular-dropdown.component.html',
  styleUrls: ['./sa-angular-dropdown.component.css']
})
export class SaAngularDropdownComponent implements OnInit {

  public _selectedValue: any = { value: null, text: 'Select' };
  public _hoveredValue: any;
  public _showDropdown: boolean = false;

  @Input() options: any[] = [];
  @Input() selectedOption: any;
  @Output() selectedOptionChange = new EventEmitter();

  @HostListener('document:keydown.escape', ['$event']) onKeyEscHandler(event: KeyboardEvent) {
    this._showDropdown = false;
  }
  @HostListener('document:keydown.arrowup', ['$event']) onKeyUpHandler(event: KeyboardEvent) {
    if( !this._showDropdown ) return;

    let ind = this.options.indexOf( this._hoveredValue );
    ind = (ind < 1) ? this.options.length -1 : ind-1;
    this._hoveredValue = this.options[ind];
  }
  @HostListener('document:keydown.arrowdown', ['$event']) onKeyDownHandler(event: KeyboardEvent) {
    if( !this._showDropdown ) return;

    let ind = this.options.indexOf( this._hoveredValue );
    ind = (ind >= this.options.length-1 ) ? 0 : ind+1;
    this._hoveredValue = this.options[ind];
  }
  @HostListener('document:keydown.enter', ['$event']) onKeyEnterHandler(event: KeyboardEvent) {
    if( !this._showDropdown ) return;

    this._selectedValue = this._hoveredValue;
    this.selectedOptionChange.emit(this._selectedValue);
    this._showDropdown = false;
  }

  constructor() { }

  ngOnInit() {
  }

  public openDropdown($event) {
    this._hoveredValue = this._selectedValue;
    this._showDropdown=! this._showDropdown;
    $event.stopPropagation();
  }

  public changeSelected(option, $event) {
    this._selectedValue = option;
    this.selectedOptionChange.emit(this._selectedValue);
    this._showDropdown = false;
    $event.stopPropagation();
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.hasOwnProperty("options")) {
      this.options = this.options;
    }
    if (this.options && !this.selectedOption) this.setDefault();
    else if (this.options && this.selectedOption) {
      if (this.selectedOption.hasOwnProperty("value")) {
        let ind = this.options.findIndex( (opt:any) => {
          return opt.value == this.selectedOption.value && opt.text == this.selectedOption.text;
        })
        if( ind >= 0 ) {
          this._selectedValue = this.options[ind]
        } else {
          this.setDefault()
        }
      }
    }
  }

  public setDefault() {
    this._selectedValue = { value: null, text: 'Select' };
  }
}
