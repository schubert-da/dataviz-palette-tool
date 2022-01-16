import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportColorsComponent } from './import-colors.component';

describe('ImportColorsComponent', () => {
  let component: ImportColorsComponent;
  let fixture: ComponentFixture<ImportColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
