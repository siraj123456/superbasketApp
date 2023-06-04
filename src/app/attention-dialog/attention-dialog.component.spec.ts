import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionDialogComponent } from './attention-dialog.component';

describe('AttentionDialogComponent', () => {
  let component: AttentionDialogComponent;
  let fixture: ComponentFixture<AttentionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttentionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttentionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
