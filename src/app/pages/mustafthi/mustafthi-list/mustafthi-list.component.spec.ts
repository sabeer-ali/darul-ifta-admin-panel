import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustafthiListComponent } from './mustafthi-list.component';

describe('MustafthiListComponent', () => {
  let component: MustafthiListComponent;
  let fixture: ComponentFixture<MustafthiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MustafthiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MustafthiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
