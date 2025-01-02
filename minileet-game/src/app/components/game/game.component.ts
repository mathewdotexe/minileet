import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../../services/question.service';
import { Question, Answer } from '../../models/question.model';
import { FlashcardComponent } from '../flashcard/flashcard.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FlashcardComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  currentQuestion: Question | null = null;
  feedback: string = '';
  selectedAnswer: Answer | null = null;
  isCorrectAnswer: boolean = false; // Tracks if the selected answer is correct

  constructor(private questionService: QuestionService) {
    this.loadQuestion();
  }

  loadQuestion() {
    const questions = this.questionService.getQuestions();
    this.currentQuestion = questions.length > 0 ? questions[0] : null;
    this.selectedAnswer = null;
    this.isCorrectAnswer = false;
  }

  evaluateAnswer(answer: Answer) {
    this.selectedAnswer = answer;
    this.isCorrectAnswer = answer.isFastest;

    // Set feedback for the UI
    this.feedback = this.isCorrectAnswer
      ? `✅ Correct! Time Complexity: ${answer.timeComplexity}, Space Complexity: ${answer.spaceComplexity}.`
      : `⚠️ Almost! Time Complexity: ${answer.timeComplexity}, Space Complexity: ${answer.spaceComplexity}.`;
  }
}

