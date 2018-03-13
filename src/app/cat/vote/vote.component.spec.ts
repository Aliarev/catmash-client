import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatVoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: CatVoteComponent;
  let fixture: ComponentFixture<CatVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
