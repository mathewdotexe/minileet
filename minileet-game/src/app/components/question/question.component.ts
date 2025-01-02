import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: true,
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() prompt: string = '';
}
