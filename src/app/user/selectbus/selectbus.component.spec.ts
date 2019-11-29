import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectbusComponent } from './selectbus.component';

describe('SelectbusComponent', () => {
  let component: SelectbusComponent;
  let fixture: ComponentFixture<SelectbusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectbusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
