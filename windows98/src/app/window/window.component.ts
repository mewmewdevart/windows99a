import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service'; // CommunicationService for inter-component communication

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.sass']
})
export class WindowComponent implements OnDestroy {
  windowVisible: boolean = false;
  private toggleWindowSubscription: Subscription; //A subscription to toggle window events

  constructor(private communicationService: CommunicationService) { // Subscribe to the toggle window events using the CommunicationService
    this.toggleWindowSubscription = this.communicationService.toggleWindow$.subscribe(() => {
      this.toggleStatusWindow();
    });
  }

  ngOnDestroy() { // Unsubscribe from the toggle window subscription
    this.toggleWindowSubscription.unsubscribe();
  }

  toggleStatusWindow() { // Toggles the visibility status of the window
    this.windowVisible = !this.windowVisible;
    this.communicationService.setWindowVisibility(this.windowVisible); // When it is visible, send the information
  }
}
