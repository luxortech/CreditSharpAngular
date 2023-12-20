import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CswadminDownloadhistoryComponent } from './cswadmin-downloadhistory.component';

describe('CswadminDownloadhistoryComponent', () => {
  let component: CswadminDownloadhistoryComponent;
  let fixture: ComponentFixture<CswadminDownloadhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswadminDownloadhistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswadminDownloadhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
