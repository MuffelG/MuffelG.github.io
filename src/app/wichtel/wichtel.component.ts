import { Component, CUSTOM_ELEMENTS_SCHEMA,  ChangeDetectorRef, signal } from '@angular/core';

@Component({
  selector: 'app-wichtel',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './wichtel.component.html',
  styleUrl: './wichtel.component.css'
})
export class WichtelComponent {
tracked = signal<boolean>(false);

  constructor(private cdr: ChangeDetectorRef) {}

  onMarkerFound(soundpath: string) {
    console.log('Marker found');
    this.tracked.set(true);
    this.cdr.detectChanges();
    const audio: HTMLAudioElement | null = document.getElementById(
      'Wichtelerzählt'
    ) as HTMLAudioElement | null;

    if (audio) {
      setTimeout(() => {
        audio
          .play()
          .then(() => console.log('Audio gestartet'))
          .catch((err) => console.error('Konnte nicht abspielen:', err));
      }, 1000);
    } else {
      console.warn("Kein Audio-Element mit der ID 'meinAudio' gefunden");
    }
  }

  onMarkerLost() {
    console.log('Marker lost');
    this.tracked.set(false);
    this.cdr.detectChanges();
  }
}
