import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInteresedComponent } from './form-interesed.component';

describe('FormInteresedComponent', () => {
  let component: FormInteresedComponent;
  let fixture: ComponentFixture<FormInteresedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInteresedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInteresedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
