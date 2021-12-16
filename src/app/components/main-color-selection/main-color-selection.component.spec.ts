import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainColorSelectionComponent } from './main-color-selection.component';

describe('MainColorSelectionComponent', () => {
  let component: MainColorSelectionComponent;
  let fixture: ComponentFixture<MainColorSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainColorSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainColorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
