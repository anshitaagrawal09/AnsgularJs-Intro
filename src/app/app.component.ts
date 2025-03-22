import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Helloworld';
  title: string = "Hello from BridgeLabz";
  logoUrl: string = "assets/BridgeLabzLogo.png";  // Image path
}
