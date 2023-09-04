import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswHomeComponent } from './cswhome.component';

describe('CswHomeComponent', () => {
  let component: CswHomeComponent;
  let fixture: ComponentFixture<CswHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
