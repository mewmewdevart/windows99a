import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service'; // CommunicationService for inter-component communication

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.sass']
})
export class StartMenuComponent {
  timeString: string = ''; // String of the clock
  taskBarVisible: boolean = false; // Bool of bar-task

  private windowVisibilitySubscription: Subscription;
  
  constructor(private communicationService: CommunicationService) {
    this.windowVisibilitySubscription = this.communicationService.windowVisibility$.subscribe((visible) => {
      this.taskBarVisible = visible;
    });

    this.updateClock();
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  maximizeWindow() {
    this.communicationService.setWindowVisibility(true); // Show the window associated with the clicked taskBar-window
    const headerWindow = document.querySelector('.window') as HTMLElement;
		headerWindow.style.display = 'block';
  }

  toggleWindow() {
    this.communicationService.toggleWindow();
  }
  
  ngOnDestroy() {
    this.windowVisibilitySubscription.unsubscribe();
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

  taskBarOptions: Array<any> = [
    {
      id: 1,
      title: 'Internet Explorer',
      photo: '../../assets/icons/icon_internet.png',
      alt: 'icon of the task bar of internet explorer'
    },
    {
      id: 2,
      title: 'Help',
      photo: '../../assets/icons/icons_help.png',
      alt: 'icon of the task bar of help icon'
    },
  ];

  blueScreen(){
		const showContainerScreen = document.querySelector('.container') as HTMLElement;
		showContainerScreen.style.display = 'flex';
    showContainerScreen.style.backgroundColor = '#000EA3';

    const noShowWinLog = document.querySelector('.win-log') as HTMLElement;
		noShowWinLog.style.display = 'none';

    const showBlueScreen = document.querySelector('.blue-screen') as HTMLElement;
		showBlueScreen.style.display = 'block';
	}
}
