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
  errorMessage: string = "";  // Stores validation error

  // Method to validate the name input
  validateName() {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;  // Regex: Initial capital + min 3 letters
    if (!this.userName.match(namePattern)) {
      this.errorMessage = "Invalid Name! Start with a capital letter & min 3 letters.";
    } else {
      this.errorMessage = "";  // Clear error if valid
    }
  }

  openBridgeLabzSite(): void {
    window.open(this.bridgeLabzUrl, "_blank");  // Open in new tab
  } 
}
