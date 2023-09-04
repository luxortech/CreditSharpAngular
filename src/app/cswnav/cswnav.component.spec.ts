import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswNavComponent } from './cswnav.component';

describe('CwsNavComponent', () => {
  let component: CswNavComponent;
  let fixture: ComponentFixture<CswNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
