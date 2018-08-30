import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundCanvasComponent } from './background-canvas.component';

describe('BackgroundCanvasComponent', () => {
  let component: BackgroundCanvasComponent;
  let fixture: ComponentFixture<BackgroundCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
