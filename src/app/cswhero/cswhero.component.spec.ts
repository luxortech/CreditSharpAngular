import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswheroComponent } from './cswhero.component';

describe('CswheroComponent', () => {
  let component: CswheroComponent;
  let fixture: ComponentFixture<CswheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswheroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
