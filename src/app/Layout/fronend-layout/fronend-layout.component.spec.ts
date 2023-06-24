import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FronendLayoutComponent } from './fronend-layout.component';

describe('FronendLayoutComponent', () => {
  let component: FronendLayoutComponent;
  let fixture: ComponentFixture<FronendLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FronendLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FronendLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
