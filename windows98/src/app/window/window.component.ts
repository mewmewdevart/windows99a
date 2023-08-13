import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service'; // CommunicationService for inter-component communication

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.sass']
})
export class WindowComponent implements OnDestroy, AfterViewInit {
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

  minimizeWindow() {
    this.windowVisible = false;
  }

  closeWindow() {  // Hide the window and send the information to the task-bar window
    this.windowVisible = false;
    this.communicationService.setWindowVisibility(false);
  }

  // Draggaglee Window: ref. https://www.w3schools.com/howto/howto_js_draggable.asp  
  ngAfterViewInit() {
    this.makeWindowDraggable();
  }

  makeWindowDraggable() {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const elmnt = document.getElementById("draggagleWindow");
    const header = document.getElementById("draggagleWindowHeader");

    function dragMouseDown(e: MouseEvent) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e: MouseEvent) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      if (elmnt) {
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }

    if (header) {
      header.onmousedown = dragMouseDown;
    } else if (elmnt) {
      elmnt.onmousedown = dragMouseDown;
    }
  }
}
