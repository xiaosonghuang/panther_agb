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
  extantSpes=[{"short_name":"ARATH", "taxon_id":"3702", "long_name":"Arabidopsis thaliana"},{"short_name":"CAEEL", "taxon_id":"6239", "long_name":"Caenorhabditis elegans"},{"short_name":"CHICK", "taxon_id":"9031", "long_name":"Gallus gallus"},{"short_name":"DANRE", "taxon_id":"7955", "long_name":"Danio rerio"},{"short_name":"DICDI", "taxon_id":"44689", "long_name":"Dictyostelium discoideum"},{"short_name":"DROME", "taxon_id":"7227", "long_name":"Drosophila melanogaster"},{"short_name":"ECOLI", "taxon_id":"83333", "long_name":"Escherichia coli"},{"short_name":"HUMAN", "taxon_id":"9606", "long_name":"Homo sapiens"},{"short_name":"MOUSE", "taxon_id":"10090", "long_name":"Mus musculus"},{"short_name":"RAT", "taxon_id":"10116", "long_name":"Rattus norvegicus"},{"short_name":"SCHPO", "taxon_id":"284812", "long_name":"Schizosaccharomyces pombe"},{"short_name":"YEAST", "taxon_id":"559292", "long_name":"Saccharomyces cerevisiae"}];
  speName:string;

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

    selectSpe()
    {
      console.log(this.speName);
    }

  }

