import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { StarWarsService } from "../star-wars.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  characters = [];
  activatedRoute: ActivatedRoute;
  starWarsService: StarWarsService;
  loadedSide = 'all';
  subscription;

  // @Output()
  // sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor(activatedRoute: ActivatedRoute, starWarsService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.starWarsService = starWarsService;
  }

  ngOnInit() {
    this.starWarsService.fetchCharacters();
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.starWarsService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    this.subscription = this.starWarsService.characterChanged.subscribe(
      () => {
        this.characters = this.starWarsService.getCharacters(this.loadedSide);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
