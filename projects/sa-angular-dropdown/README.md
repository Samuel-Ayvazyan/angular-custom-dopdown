# SaAngularDropdown

A full featured dropdown component for Angular

## Example
To install the library:
```
npm install sa-angular-dropdown
```

Include the library into your app module-
```
import {SaAngularDropdownModule} from 'sa-angular-dropdown';
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

Run `ng generate component component-name --project SaAngularDropdown` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project SaAngularDropdown`.
> Note: Don't forget to add `--project SaAngularDropdown` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build SaAngularDropdown` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build SaAngularDropdown`, go to the dist folder `cd dist/sa-angular-dropdown` and run `npm publish`.

## Running unit tests

Run `ng test SaAngularDropdown` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
