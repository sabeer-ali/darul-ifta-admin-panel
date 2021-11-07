import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustafthiEditComponent } from './mustafthi-edit.component';

describe('MustafthiEditComponent', () => {
  let component: MustafthiEditComponent;
  let fixture: ComponentFixture<MustafthiEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MustafthiEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MustafthiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
