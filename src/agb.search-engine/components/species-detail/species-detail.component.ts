import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppDataLoader } from '../../../agb.common/services';
import * as _ from 'lodash';

@Component({
  selector: 'app-species-detail',
  templateUrl: 'species-detail.component.html',
  styleUrls: ['species-detail.component.css'],
})
export class speciesDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private loader: AppDataLoader) { }

  species: string;
  genes: any[];
  connectedspeciess: string[];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loader.get('recon6', (recon) => {
        this.species = decodeURIComponent(params['id']);
        console.log(recon);
        console.log(this.species);
        this.genes = recon.species[this.species].map(x => recon.genes[x]);
        console.log(this.genes);
      });
    });
  }

}
