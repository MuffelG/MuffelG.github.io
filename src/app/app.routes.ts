import { Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { BirdvoiceComponent } from './birdvoice/birdvoice.component';
import { WichtelComponent } from './wichtel/wichtel.component';

export const routes: Routes = [
    {path: '', component: StartpageComponent},
    {path: 'birdvoice', component: BirdvoiceComponent  },
    {path: 'wichtel', component: WichtelComponent},
    
       ];
