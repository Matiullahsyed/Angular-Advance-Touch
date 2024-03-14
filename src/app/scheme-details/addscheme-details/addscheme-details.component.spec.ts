import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddschemeDetailsComponent } from './addscheme-details.component';

describe('AddschemeDetailsComponent', () => {
  let component: AddschemeDetailsComponent;
  let fixture: ComponentFixture<AddschemeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddschemeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddschemeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
