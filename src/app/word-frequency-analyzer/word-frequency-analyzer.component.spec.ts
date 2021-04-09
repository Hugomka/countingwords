import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFrequencyAnalyzerComponent } from './word-frequency-analyzer.component';
import {WordFrequency} from '../interfaces/WordFrequency';

describe('WordFrequencyAnalyzerComponent', () => {
  let component: WordFrequencyAnalyzerComponent;
  let fixture: ComponentFixture<WordFrequencyAnalyzerComponent>;
  let text = 'The sun shines over the lake'

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordFrequencyAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFrequencyAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calculate highest frequency',() => {
    expect(component.calculateHighestFrequency(text)).toEqual(2);
  });

  it('calculate frequency for word', () => {
    expect(component.calculateFrequencyForWord(text, 'the')).toEqual(2);
  });

  it('calculate most frequent N words', () => {
    let expected: WordFrequency[] = [
      { word: 'the', frequency: 2 },
      { word: 'lake', frequency: 1 },
      { word: 'over', frequency: 1 }];
    let actual = component.calculateMostFrequentNWords(text, 3)
    expect(actual).toEqual(expected);
  });
});
