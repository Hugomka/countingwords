import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFrequencyAnalyzerComponent } from './word-frequency-analyzer.component';
import { WordFrequency } from '../interfaces/WordFrequency';
import { FormsModule } from '@angular/forms';

describe('WordFrequencyAnalyzerComponent', () => {
  let component: WordFrequencyAnalyzerComponent;
  let fixture: ComponentFixture<WordFrequencyAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordFrequencyAnalyzerComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFrequencyAnalyzerComponent);
    component = fixture.componentInstance;
    component.text = 'The sun shines over the lake.'
    component.n = 3;
    component.word = 'the'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calculate highest frequency',() => {
    expect(component.calculateHighestFrequency(component.text)).toEqual(2);
  });

  it('calculate frequency for word', () => {
    expect(component.calculateFrequencyForWord(component.text, component.word)).toEqual(2);
  });

  it('calculate most frequent N words', () => {
    let expected: WordFrequency[] = [
      { word: 'the', frequency: 2 },
      { word: 'lake', frequency: 1 },
      { word: 'over', frequency: 1 }];
    let actual = component.calculateMostFrequentNWords(component.text, component.n)
    expect(actual).toEqual(expected);
  });
});
