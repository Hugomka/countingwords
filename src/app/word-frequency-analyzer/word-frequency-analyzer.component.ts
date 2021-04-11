import { Component, OnInit } from '@angular/core';
import { WordFrequencyAnalyzer } from '../interfaces/WordFrequencyAnalyzer';
import { WordFrequency } from '../interfaces/WordFrequency';

@Component({
  selector: 'app-word-frequency-analyzer',
  templateUrl: './word-frequency-analyzer.component.html',
  styleUrls: ['./word-frequency-analyzer.component.scss']
})
export class WordFrequencyAnalyzerComponent implements WordFrequencyAnalyzer, OnInit {
  text = '';
  n = 3;
  word = '';

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
    // Allow letters and spaces only
    text = this.allowLettersAndSpacesOnly(text);
    // Convert text to lowercase
    text = text.toLowerCase();
    // Split text into words
    let words = text.split(' ');
    let highestFrequency = 0
    for (let word of words) {
      // Count how many same word in text
      let frequency = ` ${text} `.split(` ${word} `).length - 1;
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
    // Allow letters and spaces only
    text = this.allowLettersAndSpacesOnly(text);
    // Convert text to lowercase
    text = text.toLowerCase();
    return ` ${text} `.split(` ${word} `).length - 1;
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
    // Regex for characters between "a" and "z" and between "A" and "Z"
    text = this.allowLettersAndSpacesOnly(text);
    // Split text into words
    let words = text.split(' ');
    let WordFrequencyArray: WordFrequency[] = [];
    for (let w of words) {
      if (WordFrequencyArray.some(({word}) => word == w)) {
        // Increment the frequent value
        let wordFrequency = WordFrequencyArray.find(({word}) => word == w);
        wordFrequency.frequency++;
      } else {
        // Add new WordFrequency to the list
        let wordFrequency: WordFrequency = { word: w, frequency: 1 };
        WordFrequencyArray.push(wordFrequency);
      }
    }
    // Sort by word in ascendant alphabetical order and then sort by frequency from high to low order depending on browser
    WordFrequencyArray = this.sortAscending(WordFrequencyArray)
    // Return only the first n of word frequency array
    return WordFrequencyArray.slice(0, n);
  }

  /**
   * Allow text only in letters like a-z and A-Z, and spaces too.
   * Every spaces will be a single space. The text will be trimmed too.
   *
   * @param text
   */
  allowLettersAndSpacesOnly(text: string) : string {
    // Regex for letters only
    let regex = /([a-zA-Z])/
    let newText = ''
    for (let c of text) {
      if (c === ' ') {
        // Prevent double or more spaces to each
        newText = newText.trim();
        newText += c;
      } else if (regex.test(c)) {
        // Add allowed character
        newText += c
      }
    }
    // Remove spaces at the begin and the end of text and then return
    return newText.trim();
  }

  /**
   * Sort by word in ascendant alphabetical order and then sort by frequency from high to low order.
   * Checking if the browser is Firefox, then it will return in a correct order.
   * Been tested in Firefox, Edge and Chrome by developer. Other browsers than those three are unknown.
   *
   * @param array
   */
  sortAscending(array: WordFrequency[]): WordFrequency[] {
    let userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("firefox")) {
      array
        .sort((a, b) => (a.word > b.word ? -1 : 1))
        .sort((a, b) => (a.frequency > b.frequency ? -1 : 1));
    } else {
      array
        .sort((a, b) => (a.word < b.word ? -1 : 1))
        .sort((a, b) => (a.frequency > b.frequency ? -1 : 1));
    }
    return array;
  }
}
