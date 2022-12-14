import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';

import { PresetListComponent } from './preset-list.component';

describe('PresetListComponent', () => {
  let component: PresetListComponent;
  let fixture: ComponentFixture<PresetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresetListComponent ],
      imports:[MatListModule, MatFormFieldModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert rgba to hex', () => {
    const pureRed = {
      red: 255,
      green: 0,
      blue:0,
      alpha: 0.1
    }
    expect(component.rgba2CssHex(pureRed)).toEqual('#ff0000');
  });
});
