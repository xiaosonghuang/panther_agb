import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AppDataLoader } from '../../../agb.common/services';
//import {metaboliteVisualizationComponent} from '../../../agb.visualization/components'
import * as _ from 'lodash';

@Component({
  selector: 'app-metabolite-details',
  templateUrl: 'metabolite-details.component.html',
  styleUrls: ['metabolite-details.component.css'],
})
export class metaboliteDetailsComponent implements OnInit {

  metabolite;
  relatedgenes;

  constructor(private route: ActivatedRoute, private loader: AppDataLoader) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loader.get("recon2", (recon) => {
        this.metabolite = recon.metabolites[params['id']];
        // console.log(this.metabolite)
        this.relatedgenes = this.metabolite.genes
          .map(x => recon.genes[x]);
      });
    });
  }

}
