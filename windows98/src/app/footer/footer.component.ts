import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  updateClock() {
    const now = new Date();
    const clockElement = document.getElementById("clock");
    if (clockElement) {
      clockElement.textContent = now.toLocaleTimeString();
    }
  }

  constructor() {
    setInterval(this.updateClock, 1000);
  }
}

