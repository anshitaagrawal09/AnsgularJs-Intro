import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Helloworld';
  title: string = "Hello from BridgeLabz";
  userName: string = "";  // Stores user input
  logoUrl: string = "assets/BridgeLabzLogo.png";  // Image path
  bridgeLabzUrl: string = "https://www.bridgelabz.com"; // Website URL

  openBridgeLabzSite(): void {
    window.open(this.bridgeLabzUrl, "_blank");  // Open in new tab
  } 
}
