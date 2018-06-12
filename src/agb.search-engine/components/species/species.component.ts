import { Component, OnInit } from '@angular/core';
import { AppDataLoader } from '../../../agb.common/services';
import * as _ from 'lodash';

@Component({
  selector: 'app-species',
  templateUrl: 'species.component.html',
  styleUrls: ['species.component.css'],
})
export class speciesComponent implements OnInit {

  speciess: string[];
  encodeURIComponent = encodeURIComponent;

  constructor(private loader: AppDataLoader) { }

  ngOnInit() {
    this.loader.get('recon6', (recon) => {
      this.speciess = _.keys(recon.species);
      console.log(recon);
      console.log(this.speciess);
    });
  }

}
