import { Component, OnInit } from '@angular/core';
//import { Film } from '../model/film';
import { Personnage } from "app/model/personnage";

import { DataService } from "../service/data.service";


@Component({
  selector: 'app-recherche-personnage',
  templateUrl: './recherche-personnage.component.html',
  styleUrls: ['./recherche-personnage.component.css']
})
export class RecherchePersonnageComponent implements OnInit {
  public recherche: String = "";
  public isRechercheOnce = false;
  public resultats: Personnage[] = [];
  public listePersonnages: Personnage[] = [];
  public pages: number = 0;
  public pageCourante: number = 0;

  public error: String = "";

  constructor(private personnageSvc: DataService) { }

  ngOnInit() {
    this.personnageSvc.rechercherHistorique()
      .subscribe(
      ((recherche) => {
        this.pageCourante = recherche.page;
        this.pages = recherche.pages;
        this.resultats = recherche.personnages;
      }),
      (error) => {
        console.log("Pas d'historique");
        //lancer ici l'exécution de recherche() pour voir tous les personnages.
        this.isRechercheOnce = true;
        this.resultats = [];
        this.personnageSvc.rechercherPersonnages(this.recherche, 1)
        .subscribe(
        ((recherche) => {
          this.pageCourante = recherche.page;
          this.pages = recherche.pages;
          this.resultats = recherche.personnages;
        }),
        (error) => {
          console.log("Pas d'historique");
        });
      });
  }

  rechercher() {
    this.error = "";
    if (this.recherche.length < 2) {
      this.error = "Veuillez saisir un nom de personnage avec au moins deux caractères";
    } else {
      this.isRechercheOnce = true;
      this.resultats = [];
      this.personnageSvc.rechercherPersonnages(this.recherche, 1)
        .subscribe(
        ((recherche) => {
          this.pageCourante = recherche.page;
          this.pages = recherche.pages;
          this.resultats = recherche.personnages;
        }),
        (error) => {
          console.log("Pas d'historique");
        });
    }
  }

  changerPage(numeroPage: number) {
    this.personnageSvc.rechercherPersonnages(this.recherche, numeroPage)
      .subscribe(
      ((recherche) => {
        this.pageCourante = recherche.page;
        this.pages = recherche.pages;
        this.resultats = recherche.personnages;
      }),
      (error) => {
        console.log("Pas d'historique");
      });
  }
}