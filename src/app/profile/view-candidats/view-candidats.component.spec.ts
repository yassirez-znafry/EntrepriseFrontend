import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCandidatsComponent } from './view-candidats.component';

describe('ViewCandidatsComponent', () => {
  let component: ViewCandidatsComponent;
  let fixture: ComponentFixture<ViewCandidatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCandidatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
