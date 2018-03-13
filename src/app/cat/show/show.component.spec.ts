import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatShowComponent } from './show.component';

describe('ShowComponent', () => {
  let component: CatShowComponent;
  let fixture: ComponentFixture<CatShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
