import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CswadminEvaluatorhistoryComponent } from './cswadmin-evaluatorhistory.component';

describe('CswadminEvaluatorhistoryComponent', () => {
  let component: CswadminEvaluatorhistoryComponent;
  let fixture: ComponentFixture<CswadminEvaluatorhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswadminEvaluatorhistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswadminEvaluatorhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
