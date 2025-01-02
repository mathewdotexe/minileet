import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Answer } from '../../models/question.model';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent {
  @Input() answer!: Answer;
  @Input() isSelected: boolean = false;
  @Input() isIncorrect: boolean = false;
  @Output() select = new EventEmitter<Answer>();

  handleClick() {
    this.select.emit(this.answer);
  }
}
