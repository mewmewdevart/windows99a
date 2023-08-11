// service element to have one "conversation" between different parts of the application (footer and desktop componts in this case)
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; // Subject to manage the status

@Injectable({
  providedIn: 'root', // Use the root as a reference
})

export class CommunicationService {
  private footerWindowStatusSubject = new Subject<boolean>(); // Manages the footer-window of the status
  footerWindowStatus$ = this.footerWindowStatusSubject.asObservable(); // Observable for checking if everthing is ok

  // Function to update the windows status
  updateFooterWindowStatus(status: boolean) {
    this.footerWindowStatusSubject.next(status); // Notificate the asObservable()
  }
}