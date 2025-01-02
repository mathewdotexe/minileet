import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  getQuestions(): Question[] {
    return [
      {
        prompt: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
        exampleInput: 'nums = [2, 7, 11, 15], target = 9',
        exampleOutput: '[0, 1]',
        answers: [
          {
            text: 'Hashing',
            description: 'Use a hash table to store elements and check for the complement.',
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            isFastest: true,
          },
          {
            text: 'Two-Pointers',
            description: 'Sort the array and use two pointers to find the sum.',
            timeComplexity: 'O(n log n)',
            spaceComplexity: 'O(1)',
            isFastest: false,
          },
        ],
      },
    ];
  }
}
