import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDetailsToolbarComponent } from './section-details-toolbar.component';

describe('SectionDetailsToolbarComponent', () => {
  let component: SectionDetailsToolbarComponent;
  let fixture: ComponentFixture<SectionDetailsToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionDetailsToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDetailsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
