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
      // Convert text to lowercase
      text = text.toLowerCase();
      // Split text into words
      let words = text.split(' ');
      let highestFrequency = 0
      for (let word of words) {
        // Count how many same word in text
        let frequency = text.split(word).length - 1;
        if (frequency > highestFrequency) {
          highestFrequency = frequency;
        }
      }
      return highestFrequency;
  }

  /**
   * CalculateFrequencyForWord should return the frequency of the specified word
   *
   * @param text
   * @param word
   */
  calculateFrequencyForWord(text: string, word: string): number {
    // Convert text to lowercase
    text = text.toLowerCase();
    return text.split(word).length - 1;
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
    // Convert text to lowercase
    text = text.toLowerCase();
    let WordFrequencyArray: WordFrequency[] = [];
    // Split text into words
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (WordFrequencyArray.some(({word}) => word == words[i])) {
        // Increment the frequent value
        let wordFrequency = WordFrequencyArray.find(({word}) => word == words[i]);
        wordFrequency.frequency++;
      }
      else {
        // Add new WordFrequency to the list
        let wordFrequency: WordFrequency = { word: words[i], frequency: 1 };
        WordFrequencyArray.push(wordFrequency);
      }
    }
    // Sort by word in ascendant alphabetical order and then sort by frequency from high to low order
    WordFrequencyArray
      .sort((a, b) => (a.word < b.word ? -1 : 1))
      .sort((a, b) => (a.frequency > b.frequency ? -1 : 1));
    // Return only the first n of word frequency array
    return WordFrequencyArray.slice(0, n);
  }
}
