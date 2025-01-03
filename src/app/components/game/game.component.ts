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
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswer: Answer | null = null;
  isCorrectAnswer: boolean = false;
  direction: 'next' | 'previous' = 'next'; // Direction of the slide animation

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
  }

  evaluateAnswer(answer: Answer) {
    this.selectedAnswer = answer;
    this.isCorrectAnswer = answer.isFastest;
  }

  get progress(): string {
    return `${this.currentQuestionIndex + 1} / ${this.questions.length}`;
  }
}
