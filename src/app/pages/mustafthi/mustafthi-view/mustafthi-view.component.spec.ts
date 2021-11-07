import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustafthiViewComponent } from './mustafthi-view.component';

describe('MustafthiViewComponent', () => {
  let component: MustafthiViewComponent;
  let fixture: ComponentFixture<MustafthiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MustafthiViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MustafthiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
