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
            description: 'Use a hash table to store elements and check for the complement efficiently.',
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            isFastest: true,
          },
          {
            text: 'Two Pointers',
            description: 'Sort the array and use two pointers to find pairs summing to the target.',
            timeComplexity: 'O(n log n)',
            spaceComplexity: 'O(1)',
            isFastest: false,
          },
        ],
      },
      {
        prompt: 'Given a string `s`, find the length of the longest substring without repeating characters.',
        exampleInput: 's = "abcabcbb"',
        exampleOutput: '3',
        answers: [
          {
            text: 'Sliding Window',
            description: 'Use a hash map to dynamically track characters in the current window.',
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            isFastest: true,
          },
          {
            text: 'Two Pointers',
            description: 'Iterate over the string with two pointers and check for duplicates in each range.',
            timeComplexity: 'O(n^2)',
            spaceComplexity: 'O(1)',
            isFastest: false,
          },
        ],
      },
      {
        prompt: 'Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).',
        exampleInput: 'nums1 = [1,3], nums2 = [2]',
        exampleOutput: '2.0',
        answers: [
          {
            text: 'Binary Search',
            description: 'Perform binary search on the smaller array to partition the arrays optimally.',
            timeComplexity: 'O(log(min(m, n)))',
            spaceComplexity: 'O(1)',
            isFastest: true,
          },
          {
            text: 'Merge Arrays',
            description: 'Merge the two arrays into one sorted array and find the median directly.',
            timeComplexity: 'O(m + n)',
            spaceComplexity: 'O(m + n)',
            isFastest: false,
          },
        ],
      },
    ];
  }
}
