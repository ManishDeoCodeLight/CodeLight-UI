import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFileUpdateComponent } from './config-file-update.component';

describe('ConfigFileUpdateComponent', () => {
  let component: ConfigFileUpdateComponent;
  let fixture: ComponentFixture<ConfigFileUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigFileUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigFileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
