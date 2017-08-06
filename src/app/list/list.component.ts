import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { StarWarsService } from "../star-wars.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters = [];
  activatedRoute: ActivatedRoute;
  starWarsService: StarWarsService;
  loadedSide = 'all';

  // @Output()
  // sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor(activatedRoute: ActivatedRoute, starWarsService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.starWarsService = starWarsService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.starWarsService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    this.starWarsService.characterChanged.subscribe(
      () => {
        this.characters = this.starWarsService.getCharacters(this.loadedSide);
      }
    );
  }

}
