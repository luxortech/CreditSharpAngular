import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CswadminCustomerUserAddComponent } from './cswadmin-customer-user-add.component';

describe('CswadminCustomerUserAddComponent', () => {
  let component: CswadminCustomerUserAddComponent;
  let fixture: ComponentFixture<CswadminCustomerUserAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswadminCustomerUserAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswadminCustomerUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
