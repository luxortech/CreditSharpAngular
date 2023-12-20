import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsadminNotificationsComponent } from './csadmin-notifications.component';

describe('CsadminNotificationsComponent', () => {
  let component: CsadminNotificationsComponent;
  let fixture: ComponentFixture<CsadminNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsadminNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsadminNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
