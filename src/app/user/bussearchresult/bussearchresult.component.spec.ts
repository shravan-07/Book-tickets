import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussearchresultComponent } from './bussearchresult.component';

describe('BussearchresultComponent', () => {
  let component: BussearchresultComponent;
  let fixture: ComponentFixture<BussearchresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussearchresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussearchresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
