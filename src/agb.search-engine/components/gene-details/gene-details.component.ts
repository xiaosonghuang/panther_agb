import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
//import { AppDataLoader } from '../../../agb.common/services';
import { ListService } from '../../../agb.common/services/data-loader/list.service';
import { List } from '../../../agb.common/services/models/List';
//import {geneVisualizationComponent} from '../../../agb.visualization/components'
import * as _ from 'lodash';

@Component({
  selector: 'app-gene-details',
  templateUrl: 'gene-details.component.html',
  styleUrls: ['gene-details.component.css'],
})
/* export class geneDetailsComponent implements OnInit {

  gene;
  relatedmetabolites;


  constructor(private route: ActivatedRoute, private loader: AppDataLoader) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loader.get("recon6", (recon) => {
        this.gene = recon.genes[params['id']];
        this.relatedmetabolites = _.keys(this.gene.metabolites).map(x => recon.metabolites[x]);
      });
    });
  }

} */

export class geneDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    //private loader: AppDataLoader,
    private listServ: ListService) { }


  ptn: string;
  //private lists: List[] = [];
  gene;
  //connectedspeciess: string[];

  ngOnInit() {
    //console.log(this.route.params);
    this.route.params.subscribe((params) => {
      this.ptn = params['ptn'];
      //console.log(this.ptn);
      this.loadGenes(this.ptn);
    });
    
  };


  public loadGenes(ptn) {

      //Get all gene list from server and update the lists property
      /* this.listServ.getAllSpecies().subscribe(
          response => this.species = response) */
  
          this.listServ.getGeneByPtn(ptn).subscribe(
            response => {
              //console.log(response);
              this.gene = response[0];
              //console.log(this.gene);
            });
  }

  }
