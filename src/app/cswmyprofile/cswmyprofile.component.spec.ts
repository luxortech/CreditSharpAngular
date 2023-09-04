import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswmyprofileComponent } from './cswmyprofile.component';

describe('CswmyprofileComponent', () => {
  let component: CswmyprofileComponent;
  let fixture: ComponentFixture<CswmyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswmyprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswmyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
