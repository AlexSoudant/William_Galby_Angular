import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecherchePersonnageComponent } from './recherche-personnage/recherche-personnage.component';
import { DataService } from "./service/data.service";

import { PaginationComponent } from './pagination/pagination.component';
import { RouterModule, Routes } from "@angular/router";
import { BarreErreurComponent } from './barre-erreur/barre-erreur.component';
import { DetailsPersonnageComponent } from './details-personnage/details-personnage.component';

const routes: Routes = [
  {path: "recherche", component: RecherchePersonnageComponent},
  {path: "personnage/:id", component: DetailsPersonnageComponent},
  {path: "**", redirectTo: "/recherche"}
];

@NgModule({
  declarations: [
    AppComponent,
    RecherchePersonnageComponent,
    PaginationComponent,
    BarreErreurComponent,
    DetailsPersonnageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
