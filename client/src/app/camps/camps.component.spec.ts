/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CampsComponent } from './camps.component';

describe('CampsComponent', () => {
  let component: CampsComponent;
  let fixture: ComponentFixture<CampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
