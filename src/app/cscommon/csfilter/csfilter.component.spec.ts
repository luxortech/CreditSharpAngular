import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfilterComponent } from './csfilter.component';

describe('CsfilterComponent', () => {
  let component: CsfilterComponent;
  let fixture: ComponentFixture<CsfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
