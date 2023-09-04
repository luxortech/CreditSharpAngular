import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswAdministrationComponent } from './cswadministration.component';

describe('CswAdministrationComponent', () => {
  let component: CswAdministrationComponent;
  let fixture: ComponentFixture<CswAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswAdministrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
