import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CswadminCustomerAddComponent } from './cswadmin-customer-add.component';

describe('CswadminCustomerAddComponent', () => {
  let component: CswadminCustomerAddComponent;
  let fixture: ComponentFixture<CswadminCustomerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswadminCustomerAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswadminCustomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
