import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CswadminProductsComponent } from './cswadmin-products.component';

describe('CswadminProductsComponent', () => {
  let component: CswadminProductsComponent;
  let fixture: ComponentFixture<CswadminProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswadminProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswadminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
