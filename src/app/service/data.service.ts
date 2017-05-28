import { Injectable } from '@angular/core';
//import { Film } from "../model/film";
import { Http, Response } from "@angular/http";
import 'rxjs';
import { Recherche } from "../model/recherche";
import { Personnage } from "../model/personnage";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {

  private personnageRecherche: String = "";
  private page: number = 0;

  constructor(private http : Http) { }

  rechercherHistorique(): Observable<Recherche> {
     if (this.personnageRecherche === "") {
       return Observable.throw("Pas de recherche historique");
      } else {
        return this.rechercherPersonnages(this.personnageRecherche, this.page);
      }
  }

  rechercherPersonnages(name: String, page: number): Observable<Recherche> {
    this.personnageRecherche = name;
    this.page = page;
      
      return this.http.get("https://swapi.co/api/people/?search=" + name + "&page=" + page)
      .map((response : Response) => {
        let resultat = response.json();
        
        if (resultat && resultat["results"]) {
          let recherche = new Recherche();
          recherche.personnages = resultat["results"];
          
          recherche.personnages.map(function(obj) {
            console.log(obj["url"]);
            obj["url"].split("/");
            obj["url"] = obj["url"][obj["url"].length - 2];
          });
          
          recherche.pages = Math.ceil(Number(resultat["count"]) / 10);
          recherche.page = page;
          return recherche;
        } else {
          return Observable.throw("Bad response");
        }
      });
  }
  
  detailsPersonnages(url: String): Observable<Personnage> {
      return this.http.get("https://swapi.co/api/people/" + url)
      .map((response : Response) => {
        let resultat = response.json();
        if (resultat && !resultat.Error) {
          return resultat;
        } else {
          return Observable.throw("Bad response");
        }
      });
  }

}
