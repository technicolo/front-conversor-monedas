import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewConversionComponent } from './preview-conversion.component';

describe('PreviewConversionComponent', () => {
  let component: PreviewConversionComponent;
  let fixture: ComponentFixture<PreviewConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewConversionComponent]
    });
    fixture = TestBed.createComponent(PreviewConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
