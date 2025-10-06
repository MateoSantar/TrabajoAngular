import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCallComponentComponent } from "../components/post-call-component/post-call-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostCallComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TrabajoAngular';
}
