import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharSavingThrowsComponent } from './char-saving-throws.component';

describe('CharSavingThrowsComponent', () => {
  let component: CharSavingThrowsComponent;
  let fixture: ComponentFixture<CharSavingThrowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharSavingThrowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharSavingThrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
