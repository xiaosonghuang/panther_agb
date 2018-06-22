import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';

//import { AppDataLoader } from '../../../agb.common/services';
import { ListService } from '../../../agb.common/services/data-loader/list.service';
import { SpeciesGeneList } from '../../../agb.common/services/models/List';
//import * as _ from 'lodash';

@Component({
  selector: 'app-species-detail',
  templateUrl: 'species-detail.component.html',
  styleUrls: ['species-detail.component.css'],
})
export class speciesDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    //private loader: AppDataLoader,
    private listServ: ListService) { }


  species: string;
  private lists: SpeciesGeneList[] = [];
  genes: any[];
  //connectedspeciess: string[];

  ngOnInit() {
    //console.log(this.route.params);
    this.route.params.subscribe((params) => {
      this.species = decodeURIComponent(params['id']);
      //console.log(this.species);
      this.loadGenes();
    });
    
  };


    public loadGenes() {

      //Get all gene list from server and update the lists property
      /* this.listServ.getAllSpecies().subscribe(
          response => this.species = response) */
  
          this.listServ.getListsBySpecies(this.species).subscribe(
            response => {
              this.lists = response;
              //console.log(this.lists);
              //this.genes = this.lists[0].genes.slice(0, 20);
              this.genes = this.lists[0].genes;
              //console.log(this.genes);
            });
    }

  }

