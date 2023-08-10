import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.sass']
})
export class FooterBarComponent {
  timeString: string = '';

  updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    let formatHourClock: string;
    if (hours >= 12)
      formatHourClock = 'PM'
    else
      formatHourClock = 'AM'

    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0'); // padStart() para formatar numeros, preenchendo a string/numeros com caracteres a esquerda
    const formattedMinutes = minutes.toString().padStart(2, '0');

    this.timeString = `${formattedHours}:${formattedMinutes} ${formatHourClock}`;
  }

  constructor() {
    this.updateClock();
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }
}
