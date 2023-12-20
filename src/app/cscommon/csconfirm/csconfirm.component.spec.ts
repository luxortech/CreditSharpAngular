import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsconfirmComponent } from './csconfirm.component';

describe('CsconfirmComponent', () => {
  let component: CsconfirmComponent;
  let fixture: ComponentFixture<CsconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsconfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
