import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsasyncComponent } from './csasync.component';

describe('CsasyncComponent', () => {
  let component: CsasyncComponent;
  let fixture: ComponentFixture<CsasyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsasyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
