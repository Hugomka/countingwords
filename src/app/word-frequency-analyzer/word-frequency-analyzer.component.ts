import { Component, OnInit } from '@angular/core';
import {WordFrequencyAnalyzer} from '../interfaces/WordFrequencyAnalyzer';
import {WordFrequency} from '../interfaces/WordFrequency';

@Component({
  selector: 'app-word-frequency-analyzer',
  templateUrl: './word-frequency-analyzer.component.html',
  styleUrls: ['./word-frequency-analyzer.component.scss']
})
export class WordFrequencyAnalyzerComponent implements WordFrequencyAnalyzer, OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * CalculateHighestFrequency should return the highest frequency in the text
   * (several words might actually have this frequency)
   *
   * @param text
   */
  calculateHighestFrequency(text: string): number {
    return 0;
  }

  /**
   * CalculateFrequencyForWord should return the frequency of the specified word
   *
   * @param text
   * @param word
   */
  calculateFrequencyForWord(text: string, word: string): number {
    return 0;
  }

  /**
   * CalculateMostFrequentNWords should return a list of the most frequent "n" words in the input text,
   * all the words returned in lower case.
   * If several words have the same frequency, this method should return them in ascendant alphabetical order
   * (for input text “The sun shines over the lake” and n = 3,
   * it should return the list {(“the”, 2), (“lake”, 1), (“over”, 1) })
   *
   * @param text
   * @param n
   */
  calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
    return [];
  }
}
