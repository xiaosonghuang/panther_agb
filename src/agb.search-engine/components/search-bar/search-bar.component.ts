import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { AppDataLoader } from '../../../agb.common/services';
import * as _ from 'lodash';
import { ListService } from '../../../agb.common/services/data-loader/list.service';

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
  //recon: any;
  filteredspecies = [];
  filteredgenes = [];

  constructor(private router: Router, private elementRef: ElementRef, private listServ: ListService) { }

  search(query: string) {
    if (query)
      this.router.navigate(['/search-result', query]);
    this.generateFilters();
  }

  getSearch(query: string) {
    if (query){
      /* this.listServ.get('recon2', (recon) => {
        this.filteredgenes = _.values<any>(recon.genes)
          .filter(x => x.id.startsWith(query) || x.name.startsWith(query));
        this.filteredmetabolites = _.values<any>(recon.metabolites)
          .filter(x => x.id.startsWith(query) || x.name.startsWith(query));
      }); */

      this.listServ.getAllSpecies().subscribe(
        response => {
          this.filteredspecies = response[0].species.filter(x => x.startsWith(query));
          //console.log(this.specs);
        });
      };
      
      this.listServ.getAllGenes().subscribe(
        response => {
          //this.lists = response;
          //console.log(this.lists);
          //this.genes = this.lists[0].genes.slice(0, 20);
          this.filteredgenes = response.filter(x => x.ptn.startsWith(query) || x.name.startsWith(query));
          //console.log(this.genes);
      });
  }

  generateFilters() {
    this.filteredgenes = new Array<any>();
    this.filteredspecies = new Array<any>();
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
