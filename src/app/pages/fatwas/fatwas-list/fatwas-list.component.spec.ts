import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatwasListComponent } from './fatwas-list.component';

describe('FatwasListComponent', () => {
  let component: FatwasListComponent;
  let fixture: ComponentFixture<FatwasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatwasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatwasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
