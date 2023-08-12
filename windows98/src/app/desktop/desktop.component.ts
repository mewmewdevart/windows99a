import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.sass']
})
export class DesktopComponent {
  windowVisible: boolean = false;
  buttonDisabled: boolean = false;
  clickCount: number = 0;

  constructor(private communicationService: CommunicationService) {}

  toggleHideWindow(){
    const headerWindow = document.querySelector('.window') as HTMLElement;
    headerWindow.style.display = 'none';
    this.clickCount = 0; // reset the clickCount when hiding the window
  }

  /*  DESACTIVED OPTION TO SHOW THE ALERT WINDOW
  alertWindow(){
    const alertWindowVisible = document.querySelector('.alertWindow') as HTMLElement;
    alertWindowVisible.style.display = 'block';
  }

  toggleCloseAlert(){
    const alertWindowVisible = document.querySelector('.alertWindow') as HTMLElement;
    alertWindowVisible.style.display = 'none';
  } */

  toggleStatusWindow() {
    this.windowVisible = !this.windowVisible;
    this.buttonDisabled = this.windowVisible; // Disable the button if the window is visible
    this.communicationService.updateFooterWindowStatus(this.windowVisible);

    /* 
    this.clickCount++;
    if (this.buttonDisabled && this.clickCount > 1) {
      this.alertWindow();
      this.clickCount = 0;
    } */
  }
}
