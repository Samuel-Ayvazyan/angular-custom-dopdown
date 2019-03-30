import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaAngularDropdownComponent } from './sa-angular-dropdown.component';

describe('SaAngularDropdownComponent', () => {
  let component: SaAngularDropdownComponent;
  let fixture: ComponentFixture<SaAngularDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaAngularDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaAngularDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
