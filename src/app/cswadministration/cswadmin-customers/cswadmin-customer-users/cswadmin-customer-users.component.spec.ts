import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CswadminCustomerUsersComponent } from './cswadmin-customer-users.component';

describe('CswadminCustomerUsersComponent', () => {
  let component: CswadminCustomerUsersComponent;
  let fixture: ComponentFixture<CswadminCustomerUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswadminCustomerUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswadminCustomerUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
