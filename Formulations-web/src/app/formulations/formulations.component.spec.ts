import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulationsComponent } from './formulations.component';

describe('FormulationsComponent', () => {
  let component: FormulationsComponent;
  let fixture: ComponentFixture<FormulationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
