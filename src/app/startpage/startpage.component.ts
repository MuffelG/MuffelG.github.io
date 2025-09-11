import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startpage',
  imports: [],
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.css'
})
export class StartpageComponent {
router = inject(Router);
  StartBirdVoice() {
    console.log('Start Bird Voice clicked');
    this.router.navigate(['/birdvoice']);
  } 

  StartWichtel() {
    console.log('Start Wichtel clicked');
    this.router.navigate(['/wichtel']);
  }

}
