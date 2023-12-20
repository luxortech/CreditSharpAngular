import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CswadminCustomerProductsComponent } from './cswadmin-customer-products.component';

describe('CswadminCustomerProductsComponent', () => {
  let component: CswadminCustomerProductsComponent;
  let fixture: ComponentFixture<CswadminCustomerProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswadminCustomerProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswadminCustomerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
