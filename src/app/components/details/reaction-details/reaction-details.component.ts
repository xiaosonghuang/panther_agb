import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {ReactionService} from '../../../services/reaction/reaction.service';
import {ReactionVisualizationService} from '../../../services/reaction/reaction-visualization.service';
import {ChemicalEquationComponent} from '../chemical-equation/chemical-equation.component';
import {KeysPipe} from '../../../pipes/keys.pipe';
import {Reaction} from '../../../models/reaction';
import {FbaNode, FbaLink} from '../../../models/fbaiteration';
import {VisualizationComponent} from '../../visualization/visualization.component';


@Component({
  moduleId: module.id,
  selector: 'app-reaction-details',
  templateUrl: 'reaction-details.component.html',
  styleUrls: ['reaction-details.component.css'],
  directives: [ROUTER_DIRECTIVES, ChemicalEquationComponent, VisualizationComponent],
  providers: [ReactionService, ReactionVisualizationService],
  pipes: [KeysPipe]
})
export class ReactionDetailsComponent implements OnInit {
  reaction: Reaction;
  relatedMetabolites: Array<any>;
  nodes: Array<FbaNode>;
  links: Array<FbaLink>;

  constructor(
    private rea: ReactionService,
    private route: ActivatedRoute,
    private reaVis: ReactionVisualizationService
  ) {
    this.reaction = new Reaction();
    this.relatedMetabolites = new Array<any>();
    this.nodes = new Array<FbaNode>();
    this.links = new Array<FbaLink>();
  };

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loadData(params['reactionId']);
    });
  }

  loadData(reactionId) {
    //  Adam gibi bir tanesi load add sonra digerini load edersin
    this.rea.getReaction(reactionId).subscribe(data => {
      this.reaction = data;
      this.rea.getRelatedMetabolites(reactionId)
        .subscribe(data => {
          this.relatedMetabolites = data['metabolites'];
          this.loadVisualization();
        });
    });
  }

  loadVisualization() {
    [this.nodes, this.links] = this.reaVis
      .convertToFbaVisualization(this.reaction, this.relatedMetabolites);
  }

}
