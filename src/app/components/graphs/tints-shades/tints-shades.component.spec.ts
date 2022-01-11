import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TintsShadesComponent } from './tints-shades.component';

describe('TintsShadesComponent', () => {
  let component: TintsShadesComponent;
  let fixture: ComponentFixture<TintsShadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TintsShadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TintsShadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
