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
    component.text = 'The sun shines over the lake.';
    component.n = 3;
    component.word = 'the';
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
    let actual = component.calculateMostFrequentNWords(component.text, component.n);
    expect(actual).toEqual(expected);
  });

  it('calculate most frequent N words with more tests', () => {
    let text1 = "My phone number is 06-XXXXXXXX and my e-mail address is aname@mail.com.";
    let text2 = "A hot dog is a fastfood. It is neither made of dog meat nor an aroused dog."
    let expected1: WordFrequency[] = [
      { word: 'is', frequency: 2 },
      { word: 'my', frequency: 2 },
      { word: 'address', frequency: 1 },
      { word: 'anamemailcom', frequency: 1 },
      { word: 'and', frequency: 1 },
      { word: 'email', frequency: 1}];
    let expected2: WordFrequency[] = [
      { word: 'dog', frequency: 3 },
      { word: 'a', frequency: 2 },
      { word: 'is', frequency: 2 },
      { word: 'an', frequency: 1 },
      { word: 'aroused', frequency: 1}
    ];
    let actual1 = component.calculateMostFrequentNWords(text1, expected1.length);
    let actual2 = component.calculateMostFrequentNWords(text2, expected2.length);
    expect(actual1).toEqual(expected1);
    expect(actual2).toEqual(expected2);
  });
});
