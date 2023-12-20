import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CswadminAdministratorsComponent } from './cswadmin-administrators.component';

describe('CswadminAdministratorsComponent', () => {
  let component: CswadminAdministratorsComponent;
  let fixture: ComponentFixture<CswadminAdministratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswadminAdministratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswadminAdministratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
