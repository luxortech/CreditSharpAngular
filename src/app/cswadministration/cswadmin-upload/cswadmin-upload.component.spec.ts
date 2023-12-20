import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CswadminUploadComponent } from './cswadmin-upload.component';

describe('CswadminUploadComponent', () => {
  let component: CswadminUploadComponent;
  let fixture: ComponentFixture<CswadminUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswadminUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswadminUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
