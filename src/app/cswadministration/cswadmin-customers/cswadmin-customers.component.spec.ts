import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CswadminCustomersComponent } from './cswadmin-customers.component';

describe('CswadminCustomersComponent', () => {
  let component: CswadminCustomersComponent;
  let fixture: ComponentFixture<CswadminCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswadminCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswadminCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
