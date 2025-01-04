import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../../services/question.service';
import { Question, Answer } from '../../models/question.model';
import { PrismHighlightDirective } from '../../services/prism-highlight.directive';
import { FlashcardComponent } from '../flashcard/flashcard.component';

import 'prismjs/themes/prism-okaidia.css'; // Theme CSS
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'; // Line numbers plugin CSS
import 'prismjs/components/prism-java';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FlashcardComponent, PrismHighlightDirective],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswer: Answer | null = null;
  isCorrectAnswer: boolean = false;
  direction: 'next' | 'previous' = 'next'; // Direction of the slide animation
  generatedCode: string | null = null; // To hold the generated Java code
  showCopyNotification: boolean = false; // Controls the visibility of the copy notification

  constructor(private questionService: QuestionService) {
    this.questions = this.questionService.getQuestions();
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.direction = 'next';
      this.currentQuestionIndex++;
      this.resetState();
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.direction = 'previous';
      this.currentQuestionIndex--;
      this.resetState();
    }
  }

  resetState() {
    this.selectedAnswer = null;
    this.isCorrectAnswer = false;
    this.generatedCode = null; // This will always reset the generated code
  }


  evaluateAnswer(answer: Answer) {
    this.selectedAnswer = answer;
    this.isCorrectAnswer = answer.isFastest;
  }

  copyToClipboard() {
    if (this.generatedCode) {
      navigator.clipboard
        .writeText(this.generatedCode)
        .then(() => {
          this.showCopyNotification = true; // Show the notification
          setTimeout(() => {
            this.showCopyNotification = false; // Hide the notification after 2 seconds
          }, 2000);
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
        });
    }
  }

  generateCode() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (!currentQuestion) return;

    // Example of generating Java code based on the current question
    switch (this.currentQuestionIndex) {
      case 0: // Two Sum
        this.generatedCode = `
  public int[] twoSum(int[] nums, int target) {
      // Create a HashMap to store the numbers and their indices
      Map<Integer, Integer> map = new HashMap<>();

      // Loop through the array to find the two numbers
      for (int i = 0; i < nums.length; i++) {
          // Calculate the complement needed to reach the target
          int complement = target - nums[i];

          // Check if the complement exists in the map
          if (map.containsKey(complement)) {
              // Return the indices of the two numbers
              return new int[] { map.get(complement), i };
          }

          // Store the current number and its index in the map
          map.put(nums[i], i);
      }

      // If no solution is found, throw an exception
      throw new IllegalArgumentException("No solution found");
  }`;
        break;
      case 1: // Longest Substring Without Repeating Characters
        this.generatedCode = `
  public int lengthOfLongestSubstring(String s) {
      // Use a HashSet to track unique characters in the substring
      Set<Character> set = new HashSet<>();

      // Initialize two pointers and a variable to track the max length
      int left = 0, maxLength = 0;

      // Expand the window by moving the right pointer
      for (int right = 0; right < s.length(); right++) {
          // If the character at the right pointer is already in the set,
          // shrink the window by moving the left pointer
          while (set.contains(s.charAt(right))) {
              set.remove(s.charAt(left++));
          }

          // Add the character at the right pointer to the set
          set.add(s.charAt(right));

          // Update the max length of the substring
          maxLength = Math.max(maxLength, right - left + 1);
      }

      // Return the maximum length found
      return maxLength;
  }`;
        break;
      case 2: // Median of Two Sorted Arrays
        this.generatedCode = `
  public double findMedianSortedArrays(int[] nums1, int[] nums2) {
      int m = nums1.length, n = nums2.length;

      // Ensure nums1 is the smaller array for binary search efficiency
      if (m > n) return findMedianSortedArrays(nums2, nums1);

      // Perform binary search on the smaller array
      int imin = 0, imax = m, halfLen = (m + n + 1) / 2;

      while (imin <= imax) {
          int i = (imin + imax) / 2; // Partition point in nums1
          int j = halfLen - i;      // Partition point in nums2

          // Adjust the binary search range
          if (i < m && nums2[j - 1] > nums1[i]) {
              imin = i + 1; // Move right
          } else if (i > 0 && nums1[i - 1] > nums2[j]) {
              imax = i - 1; // Move left
          } else {
              // Calculate max of left partition
              int maxLeft = 0;
              if (i == 0) maxLeft = nums2[j - 1];
              else if (j == 0) maxLeft = nums1[i - 1];
              else maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);

              // If odd total length, return max of left partition
              if ((m + n) % 2 == 1) return maxLeft;

              // Calculate min of right partition
              int minRight = 0;
              if (i == m) minRight = nums2[j];
              else if (j == n) minRight = nums1[i];
              else minRight = Math.min(nums1[i], nums2[j]);

              // Return the average of maxLeft and minRight
              return (maxLeft + minRight) / 2.0;
          }
      }

      // Return 0.0 if no median is found (unlikely scenario)
      return 0.0;
  }`;
        break;
      default:
        this.generatedCode = 'Code generation for this question is not implemented.';
    }
  }

  get progress(): string {
    return `${this.currentQuestionIndex + 1} / ${this.questions.length}`;
  }
}
