import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { AppDataLoader } from '../../../agb.common/services';
import * as _ from 'lodash';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css'],
  host: {
    '(document:click)': 'handleClick($event)',
  },
})

export class SearchBarComponent {

  query: string;
  recon: any;
  filteredmetabolites = [];
  filteredgenes = [];

  constructor(private router: Router, private elementRef: ElementRef, private loader: AppDataLoader) { }

  search(query: string) {
    if (query)
      this.router.navigate(['/search-result', query]);
    this.generateFilters();
  }

  getSearch(query: string) {
    if (query)
      this.loader.get('recon2', (recon) => {
        this.filteredgenes = _.values<any>(recon.genes)
          .filter(x => x.id.startsWith(query) || x.name.startsWith(query));
        this.filteredmetabolites = _.values<any>(recon.metabolites)
          .filter(x => x.id.startsWith(query) || x.name.startsWith(query));
      });
  }

  generateFilters() {
    this.filteredgenes = new Array<any>();
    this.filteredmetabolites = new Array<any>();
  }

  /**
   * Closes the autocomplete when click anywhere
   * @param  {[type]} event clickEvent
   */
  handleClick(event) {
    var clickedComponent = event.target;
    var inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement)
        inside = true;
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);

    if (!inside) this.generateFilters();
  }

}
