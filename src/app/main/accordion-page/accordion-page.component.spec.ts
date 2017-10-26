import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPageComponent } from './accordion-page.component';

describe('AccordionPageComponent', () => {
  let component: AccordionPageComponent;
  let fixture: ComponentFixture<AccordionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
