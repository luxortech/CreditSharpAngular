import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswfeatureComponent } from './cswfeature.component';

describe('CswfeatureComponent', () => {
  let component: CswfeatureComponent;
  let fixture: ComponentFixture<CswfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswfeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
