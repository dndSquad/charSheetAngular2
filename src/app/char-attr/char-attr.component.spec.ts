import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharAttrComponent } from './char-attr.component';

describe('CharAttrComponent', () => {
  let component: CharAttrComponent;
  let fixture: ComponentFixture<CharAttrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharAttrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
