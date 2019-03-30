import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-custom-dropdown';
  public arrOptions1 = [
    { value: 10, text: 'Value10'},
    { value: 20, text: 'Value20'},
    { value: 30, text: 'Value30'},
    { value: 40, text: 'Value40'},
    { value: 50, text: 'Value50'},
  ]
  public arrOptions2 = [
    { value: 100, text: 'Value100'},
    { value: 200, text: 'Value200'},
    { value: 300, text: 'Value300'},
    { value: 400, text: 'Value400'},
    { value: 500, text: 'Value500'},
    { value: 600, text: 'Value600'},
    { value: 700, text: 'Value700'},
    { value: 800, text: 'Value800'},
    { value: 900, text: 'Value900'},
  ]
  public arrOptions3 = [
    { value: 1, text: 'Value1'},
    { value: 2, text: 'Value2'},
    { value: 3, text: 'Value3'},
  ]
}
