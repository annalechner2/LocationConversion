import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationConversionComponent } from './location-conversion.component';

describe('LocationConversionComponent', () => {
  let component: LocationConversionComponent;
  let fixture: ComponentFixture<LocationConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
