import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsSectionComponent } from './socials-section.component';

describe('SocialsSectionComponent', () => {
  let component: SocialsSectionComponent;
  let fixture: ComponentFixture<SocialsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
