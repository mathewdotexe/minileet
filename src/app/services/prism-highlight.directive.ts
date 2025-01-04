import { Directive, ElementRef, Input, OnChanges, AfterViewChecked } from '@angular/core';
import Prism from 'prismjs';

// Import necessary languages and plugins
import 'prismjs/components/prism-java'; // Add Java syntax support
import 'prismjs/plugins/line-numbers/prism-line-numbers'; // Line numbers plugin
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'; // CSS for line numbers

@Directive({
  selector: '[appPrismHighlight]',
  standalone: true, // Standalone directive
})
export class PrismHighlightDirective implements OnChanges, AfterViewChecked {
  @Input() code: string | null = null;
  @Input() language: string = 'java'; // Changed default to Java

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.code) {
      const element = this.el.nativeElement;
      element.innerHTML = `<code class="language-${this.language}">${Prism.highlight(
        this.code,
        Prism.languages[this.language],
        this.language
      )}</code>`;

      // Add line numbers class if needed
      element.classList.add('line-numbers');
    }
  }

  ngAfterViewChecked() {
    // This ensures Prism's line numbers are applied after the DOM has updated
    Prism.highlightAllUnder(this.el.nativeElement);
  }
}
