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

toggleFavorite(index: number): void {
    this.movies[index].favorite = !this.movies[index].favorite;
}

movies: Array<any> = [
  {
    id: 1,
    title: 'Street Trash',
    photo: '../../assets/banner_1.png',
    alt: 'street trash image',
    price: 20,
    favorite: false,
    duration: 105, 
    genre: 'Horror',
    director: 'James M. Muro',
    synopsis: "Amid the grimy streets of New York City, a case of tainted liquor turns homeless people into melting mutants. Chaos ensues as the liquid spreads, leading to a battle for survival in this gory cult classic.",
    mediaRating: 2.8,
  },
  {
    id: 2,
    title: 'In the Dark',
    photo: '../../assets/banner_2.png',
    alt: 'In the Dark image',
    price: 50,
    favorite: false,
    duration: 120, 
    genre: 'Thriller',
    director: 'David Spade',
    synopsis: "A suspenseful tale of a detective chasing a serial killer who leaves cryptic clues at crime scenes. As the stakes rise, the detective becomes entangled in a psychological battle with the killer.",
    mediaRating: 3.5,
  },
  {
    id: 3,
    title: 'Troll 2',
    photo: '../../assets/banner_3.png',
    alt: 'Troll 2 image',
    price: 50,
    favorite: false,
    duration: 95,
    genre: 'Fantasy',
    director: 'Claudio Fragasso',
    synopsis: "A family vacation turns bizarre when they encounter a town populated by vegetarian goblins who want to turn them into plants. This unintentionally hilarious movie has gained a cult following.",
    mediaRating: 3.9,
  }
];

selectedMovie: any;

viewDetails(movieId: number) {
  this.selectedMovie = this.movies.find(movie => movie.id === movieId);
}
}
