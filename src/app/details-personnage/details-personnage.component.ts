import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../service/data.service";
import { Personnage } from "app/model/personnage";

@Component({
  selector: 'app-details-personnage',
  templateUrl: './details-personnage.component.html',
  styleUrls: ['./details-personnage.component.css']
})
export class DetailsPersonnageComponent implements OnInit {
  private sub: any;
  private url: string = "";
  public personnage: Personnage = new Personnage();

  constructor(private route: ActivatedRoute, private personnageSvc: DataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.url = params["id"];
      this.personnageSvc.detailsPersonnages(this.url)
        .subscribe(
        (response) => {
          this.personnage = response;
        }),
        (error) => {
          console.log(error);
        }
    });
  }

}
