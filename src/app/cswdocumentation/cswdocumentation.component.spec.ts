import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswDocumentationComponent } from './cswdocumentation.component';

describe('CswDocumentationComponent', () => {
  let component: CswDocumentationComponent;
  let fixture: ComponentFixture<CswDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
