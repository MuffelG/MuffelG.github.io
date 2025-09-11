import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-birdvoice',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './birdvoice.component.html',
  styleUrl: './birdvoice.component.css'
})
export class BirdvoiceComponent {
soundPath ='';
  searchedSoundPath='';
  bPlaySearchedSound = signal<boolean>(false);
  constructor(private cdr: ChangeDetectorRef) {}

  tracked = signal<boolean>(false);

  onMarkerFound(soundpath: string) {
    console.log('Marker found');
    this.tracked.set(true);
    this.cdr.detectChanges();
    this.soundPath = soundpath;
  }

  onMarkerLost() {
    console.log('Marker lost');
    this.tracked.set(false);
     this.cdr.detectChanges();
  }

  onBoxClick()
  {
    console.log('Box clicked');
    // You can add any additional logic here when the box is clicked
  }

  StartElement() {
    console.log('Start Element clicked');
    // You can add any additional logic here when the Start Element button is clicked
  }

  PlaySearchedSound()
  {
    this.searchedSoundPath = 'assets/Uhu.mp3';
    this.bPlaySearchedSound.set(true);
  }
}
