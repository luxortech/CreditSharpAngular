import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswPricingComponent } from './cswpricing.component';

describe('CswPricingComponent', () => {
  let component: CswPricingComponent;
  let fixture: ComponentFixture<CswPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
