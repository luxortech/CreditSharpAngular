import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CwsadminProductsAddComponent } from './cwsadmin-products-add.component';

describe('CwsadminProductsAddComponent', () => {
  let component: CwsadminProductsAddComponent;
  let fixture: ComponentFixture<CwsadminProductsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwsadminProductsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwsadminProductsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
