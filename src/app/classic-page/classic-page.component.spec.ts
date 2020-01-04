import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicPageComponent } from './classic-page.component';

describe('ClassicPageComponent', () => {
  let component: ClassicPageComponent;
  let fixture: ComponentFixture<ClassicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
