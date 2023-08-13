import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private toggleWindowSubject = new Subject<void>(); // Active the window
  private windowVisibilitySubject = new Subject<boolean>(); // Active the bar-task

  toggleWindow$: Observable<void> = this.toggleWindowSubject.asObservable();
  windowVisibility$: Observable<boolean> = this.windowVisibilitySubject.asObservable();

  toggleWindow() { // Just a toggle function of the button in the icon.component to see it has been clicked
    this.toggleWindowSubject.next();
  }

  setWindowVisibility(visible: boolean) {
    this.windowVisibilitySubject.next(visible);
  }
}
