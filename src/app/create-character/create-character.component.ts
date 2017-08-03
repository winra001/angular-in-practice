import { Component, OnInit } from '@angular/core';
import { StarWarsService } from "../star-wars.service";

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ];

  starWarsService: StarWarsService;
  defaultName = 'Obi-Wan';

  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    this.starWarsService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }

}
