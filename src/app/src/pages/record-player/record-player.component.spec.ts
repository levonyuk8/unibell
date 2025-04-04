import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordPlayerComponent } from './record-player.component';

describe('RecordPlayerComponent', () => {
  let component: RecordPlayerComponent;
  let fixture: ComponentFixture<RecordPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
