import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswevalComponent } from './csweval.component';

describe('CswevalComponent', () => {
  let component: CswevalComponent;
  let fixture: ComponentFixture<CswevalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswevalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswevalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
