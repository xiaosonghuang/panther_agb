import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AppDataLoader } from '../../../agb.common/services';
import * as _ from 'lodash';

@Component({
  selector: 'app-search-result',
  templateUrl: 'search-result.component.html',
  styleUrls: ['search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  query: string;
  filteredmetabolites: Array<any>;
  filteredgenes: Array<any>;

  constructor(private route: ActivatedRoute, private loader: AppDataLoader) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loader.get('recon2', (recon) => {
        this.filteredgenes = this.filter(recon.genes, params['query']);
        this.filteredmetabolites = this.filter(recon.metabolites, params['query']);
      });
    });
  }

  filter(metabolitegene, query) {
    return _.values<any>(metabolitegene)
      .filter(x => x.id.startsWith(query) || x.name.startsWith(query));
  }

}
