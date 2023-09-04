import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswLoginComponent } from './cswlogin.component';

describe('CswLoginComponent', () => {
  let component: CswLoginComponent;
  let fixture: ComponentFixture<CswLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
