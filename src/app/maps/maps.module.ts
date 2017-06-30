import 'jvectormap/jquery-jvectormap.min.js';
import 'jvectormap-world/jquery-jvectormap-world-mill-en.js';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule, TooltipModule } from 'ng2-bootstrap';
import { ButtonsModule, DropdownModule } from 'ng2-bootstrap';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapsGoogle } from './google/maps-google.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DealerSearchAPI} from "../Services/dealersearch.api.service";

export const routes = [
  {path: '', redirectTo: 'dealer', pathMatch: 'full'},
  {path: 'dealer', component: MapsGoogle},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    MapsGoogle
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    DropdownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    }),
    HttpModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    DealerSearchAPI
  ]
})
export class MapsModule {
  static routes = routes;
}
