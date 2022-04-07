import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectlstComponent } from './subjectlst.component';

describe('SubjectlstComponent', () => {
  let component: SubjectlstComponent;
  let fixture: ComponentFixture<SubjectlstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectlstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectlstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
