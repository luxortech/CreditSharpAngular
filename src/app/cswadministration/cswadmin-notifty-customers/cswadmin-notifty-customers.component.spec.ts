import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CswadminNotiftyCustomersComponent } from './cswadmin-notifty-customers.component';

describe('CswadminNotiftyCustomersComponent', () => {
  let component: CswadminNotiftyCustomersComponent;
  let fixture: ComponentFixture<CswadminNotiftyCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswadminNotiftyCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswadminNotiftyCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
