import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswAboutComponent } from './cswabout.component';

describe('CswAboutComponent', () => {
  let component: CswAboutComponent;
  let fixture: ComponentFixture<CswAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
