import { Component, OnDestroy } from '@angular/core';
import { CommunicationService } from '../communication.service'; // Atualize o caminho conforme necessário
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.sass']
})

export class FooterBarComponent implements OnDestroy {
  timeString: string = ''; // String of the clock
  windowFooterVisible = false; // Bool to the window-footer-bar
  footerWindowStatusSubscription: Subscription; // Using subscrition to check the events of the Observable() using as a refarence the communcation.ts

  toggleWindowFooter(){
    this.windowFooterVisible = !this.windowFooterVisible;
  }
  ngOnDestroy() {
    this.footerWindowStatusSubscription.unsubscribe(); // To destroy the component (check if it is necessary)
  }

  updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    let formatHourClock: string;
    if (hours >= 12)
      formatHourClock = 'PM';
    else
      formatHourClock = 'AM';

    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0'); // padStart() to format numbers, filling the string/numbers with characters on the left
    const formattedMinutes = minutes.toString().padStart(2, '0');

    this.timeString = `${formattedHours}:${formattedMinutes} ${formatHourClock}`;
  }

  // Constructor to clock and display-window
  constructor(private communicationService: CommunicationService) {
    this.footerWindowStatusSubscription = this.communicationService.footerWindowStatus$.subscribe(
      (status: boolean) => {
        this.toggleWindowFooter();
      }
    );

    this.updateClock();
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }
}
