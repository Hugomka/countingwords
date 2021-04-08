interface WordFrequencyAnalyzer {
  calculateHighestFrequency(text: string): number;
  icalculateFrequencyForWord(text: string, word: string): number;
  calculateMostFrequentNWords(text: string, n: number): WordFrequency[];
}
