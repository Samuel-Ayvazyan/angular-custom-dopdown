# AngularCustomDropdown

This project is for development and testing of `sa-angular-dropdown` component.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Example

Include the library into your app module-
```
import { SaAngularDropdownModule } from 'projects/sa-angular-dropdown/src/public-api';
```

Add it to your @NgModule imports-
```
@NgModule({
  imports: [
    BrowserModule
    ...,
    ...,
    SaAngularDropdownModule
  ],
  declarations: [...],
  ...
})
```

## Usage
```
dummyData = [{
  value: 1,
  text: "Foo"
}, {
  value: 2,
  text: "Bar"
}]
<sa-angular-dropdown [options]="dummyData"></sa-angular-dropdown>
```

## Options

Apart from the default settings, there are a number of options that can be
specified for the dropdown components. Options are specified by directly adding it to the
element as attribute with property binding, attribute binding and event binding.
Possible options are:

  * `options` (property): To set the data of that dropdown (required).
  * `selectedOption` (property, supports two way binding): To set any option as the selected option -
  Usage:
    ```
    <sa-angular-dropdown [options]="dummyData" [(selectedOption)]="dummyOption"></sa-angular-dropdown>
    ```
  * `selectedOptionChange` (property): To call a function on selected option change event.
  Usage:
    ```
    <sa-angular-dropdown [data]="dummyData" (selectedOptionChange)="dummyChange($event)"></sa-angular-dropdown>
    ```


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
