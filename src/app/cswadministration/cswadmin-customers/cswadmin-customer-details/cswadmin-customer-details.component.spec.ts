import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CswadminCustomerDetailsComponent } from './cswadmin-customer-details.component';

describe('CswadminCustomerDetailsComponent', () => {
  let component: CswadminCustomerDetailsComponent;
  let fixture: ComponentFixture<CswadminCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswadminCustomerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswadminCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
