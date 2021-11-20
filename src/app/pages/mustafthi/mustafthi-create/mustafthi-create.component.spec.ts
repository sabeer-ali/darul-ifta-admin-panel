import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustafthiCreateComponent } from './mustafthi-create.component';

describe('MustafthiCreateComponent', () => {
  let component: MustafthiCreateComponent;
  let fixture: ComponentFixture<MustafthiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MustafthiCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MustafthiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
