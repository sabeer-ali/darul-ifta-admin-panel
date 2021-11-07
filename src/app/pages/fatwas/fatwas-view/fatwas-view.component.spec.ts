import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatwasViewComponent } from './fatwas-view.component';

describe('FatwasViewComponent', () => {
  let component: FatwasViewComponent;
  let fixture: ComponentFixture<FatwasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatwasViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatwasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
