import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AppDataLoader } from '../../../agb.common/services';
//import {geneVisualizationComponent} from '../../../agb.visualization/components'
import * as _ from 'lodash';

@Component({
  selector: 'app-gene-details',
  templateUrl: 'gene-details.component.html',
  styleUrls: ['gene-details.component.css'],
})
export class geneDetailsComponent implements OnInit {

  gene;
  relatedmetabolites;


  constructor(private route: ActivatedRoute, private loader: AppDataLoader) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loader.get("recon2", (recon) => {
        this.gene = recon.genes[params['id']];
        this.relatedmetabolites = _.keys(this.gene.metabolites).map(x => recon.metabolites[x]);
      });
    });
  }

}
