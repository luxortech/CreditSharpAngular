import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswmydownloadsComponent } from './cswmydownloads.component';

describe('CswmydownloadsComponent', () => {
  let component: CswmydownloadsComponent;
  let fixture: ComponentFixture<CswmydownloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswmydownloadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswmydownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
