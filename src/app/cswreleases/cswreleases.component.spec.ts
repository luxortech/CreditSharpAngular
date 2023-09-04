import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswReleasesComponent } from './cswreleases.component';

describe('CswReleasesComponent', () => {
  let component: CswReleasesComponent;
  let fixture: ComponentFixture<CswReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswReleasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
