import { Component, CUSTOM_ELEMENTS_SCHEMA,  ChangeDetectorRef, signal, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-wichtel',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './wichtel.component.html',
  styleUrl: './wichtel.component.css'
})
export class WichtelComponent implements AfterViewInit{
tracked = signal<boolean>(false);

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    // Prüfen, ob DeviceOrientation unterstützt wird
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (event) => {
        // Beispiel: Passe den Y-Rotationswert der Kamera anhand des alpha-Werts an
        const cameraEl = document.querySelector('[camera]');
        if (cameraEl && event.alpha !== null) {
          // Setzte die Rotation – hier einfach skaliert, je nach Bedarf anpassen
          const rotationY = 360 - event.alpha;
          cameraEl.setAttribute('rotation', `0 ${rotationY} 0`);
        }
      });
    }
  }

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
