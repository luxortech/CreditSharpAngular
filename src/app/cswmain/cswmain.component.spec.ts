import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswMainComponent } from './cswmain.component';

describe('CswMainComponent', () => {
  let component: CswMainComponent;
  let fixture: ComponentFixture<CswMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
