import { Component, OnInit } from '@angular/core';
//import { AppDataLoader } from '../../../agb.common/services';
import { ListService } from '../../../agb.common/services/data-loader/list.service';
//import { List } from '../../../agb.common/services/models/List';
import * as _ from 'lodash';

@Component({
  selector: 'app-species',
  templateUrl: 'species.component.html',
  styleUrls: ['species.component.css'],
})
export class speciesComponent implements OnInit {

  //private lists: List[] = [];
  specs: string[];
  encodeURIComponent = encodeURIComponent;

  /* constructor(private loader: AppDataLoader) { }

  ngOnInit() {
    this.loader.get('http://localhost:3000/genelist/species/', (recon) => {
      this.speciess = _.keys(recon.lists);
      console.log(recon);
      console.log(this.speciess);
    });
  } */

  constructor(private listServ: ListService) { }

  ngOnInit() {
     
    //Load all list on init
    this.loadSpecies();
    //console.log(this.species);

  }

  public loadSpecies() {

    //Get all species list from server and update the lists property
    /* this.listServ.getAllSpecies().subscribe(
        response => this.species = response) */

        this.listServ.getAllSpecies().subscribe(
          response => {
            this.specs = response[0].species;
            //console.log(this.specs);
          });
        }



}
