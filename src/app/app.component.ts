import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCallComponentComponent } from '../components/post-call-component/post-call-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostCallComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('footer') footer!: ElementRef;

  scrollToBottom() {
    if (this.footer) {
      this.footer.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  title = 'Trabajo Angular';
}
