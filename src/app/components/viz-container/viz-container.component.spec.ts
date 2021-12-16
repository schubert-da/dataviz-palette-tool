import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizContainerComponent } from './viz-container.component';

describe('VizContainerComponent', () => {
  let component: VizContainerComponent;
  let fixture: ComponentFixture<VizContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
