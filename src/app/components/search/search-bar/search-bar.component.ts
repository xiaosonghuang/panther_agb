import { Component, OnInit, ElementRef } from '@angular/core';
import {SearchService} from '../../../services/search/search.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css'],
  providers: [SearchService],
  host: {
    '(document:click)': 'handleClick($event)',
  },
})
export class SearchBarComponent {

  query: String;
  filteredMetabolites: Array<any>;
  filteredReactions: Array<any>;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private elementRef: ElementRef) {

    this.generateFilters();
  }

  generateFilters() {
    this.filteredReactions = new Array<any>();
    this.filteredMetabolites = new Array<any>();
  }

  selectSearch(searchPrefix) {
    this.query = searchPrefix;
    this.generateFilters();
  }

  search() {
    if (this.query)
      this.router.navigate(['/search-result', this.query]);
  }

  getSearch(query: string) {
    if (this.query)
      this.searchService.searchPrefix(query).subscribe(
        data => {
          this.filteredReactions = data["reactions"];
          this.filteredMetabolites = data["metabolites"];
        });
    else
      this.generateFilters();
  }

  handleClick(event) { //This function closes the autocomplete when click anywhere
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