import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AppDataLoader } from '../../../agb.common/services';
import { ListService } from '../../../agb.common/services/data-loader/list.service';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
//import { List } from '../../../agb.common/services/models/List';
//import * as _ from 'lodash';


/* const actionMapping:IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) {
        TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      }
    },
    click: (tree, node, $event) => {
      this.species = node.data.name;
      
    }
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
}; */

@Component({
  selector: 'app-species',
  templateUrl: 'species.component.html',
  styleUrls: ['species.component.css'],
})

export class speciesComponent {
  
  constructor (private router: Router, private listServ: ListService) {}

  species: string;
  encodeURIComponent = encodeURIComponent;
  //@Input() public dataSource: any[];
  
  nodes = [{name:"LUCA",children:[{name:"Archaea-Eukaryota",children:[{name:"Eukaryota",children:[{name:"Unikonts",children:[{name:"Opisthokonts",children:[{name:"Metazoa-Choanoflagellida",children:[{name:"Eumetazoa",children:[{name:"Bilateria",children:[{name:"Deuterostomia",children:[{name:"Chordata",children:[{name:"Craniata-Cephalochordata",children:[{name:"Euteleostomi",children:[{name:"Tetrapoda",children:[{name:"Amniota",children:[{name:"Mammalia",children:[{name:"Theria",children:[{name:"Eutheria",children:[{name:"Euarchontoglires",children:[{name:"Catarrhini",children:[{name:"Homininae",children:[{name:"Homo-Pan",children:[{name:"HUMAN"},{name:"PANTR"}]},{name:"GORGO"}]},{name:"MACMU"}]},{name:"Murinae",children:[{name:"MOUSE"},{name:"RAT"}]}]},{name:"Laurasiatheria",children:[{name:"Perissodactyla",children:[{name:"Artiodactyla",children:[{name:"BOVIN"},{name:"PIG"}]},{name:"HORSE"}]},{name:"Carnivora",children:[{name:"FELCA"},{name:"CANLF"}]}]}]},{name:"MONDO"}]},{name:"ORNAN"}]},{name:"Sauria",children:[{name:"CHICK"},{name:"ANOCA"}]}]},{name:"XENTR"}]},{name:"Neopterygii",children:[{name:"Teleostei",children:[{name:"ORYLA"},{name:"DANRE"}]},{name:"LEPOC"}]}]},{name:"BRAFL"}]},{name:"CIOIN"}]},{name:"STRPU"}]},{name:"Protostomia",children:[{name:"Ecdysozoa",children:[{name:"Rhabditida-Chromadorea",children:[{name:"Caenorhabditis",children:[{name:"CAEEL"},{name:"CAEBR"}]},{name:"PRIPA"}]},{name:"Arthropoda",children:[{name:"Hexapoda-Crustacea",children:[{name:"Endopterygota",children:[{name:"Diptera",children:[{name:"DROME"},{name:"ANOGA"}]},{name:"TRICA"}]},{name:"DAPPU"}]},{name:"IXOSC"}]}]},{name:"HELRO"}]}]},{name:"NEMVE"},{name:"TRIAD"}]},{name:"MONBE"}]},{name:"Fungi",children:[{name:"Dikarya",children:[{name:"Ascomycota",children:[{name:"Pezizomycotina-Saccharomycotina",children:[{name:"Saccharomycetales",children:[{name:"Saccharomycetaceae-Candida",children:[{name:"Saccharomycetaceae",children:[{name:"YEAST"},{name:"ASHGO"}]},{name:"CANAL"}]},{name:"YARLI"}]},{name:"Pezizomycotina",children:[{name:"Aspergillus",children:[{name:"EMENI"},{name:"ASPFU"}]},{name:"Sordariomycetes-Leotiomycetes",children:[{name:"Sordariomyceta",children:[{name:"NEUCR"},{name:"SCLS1"}]},{name:"PHANO"}]}]}]},{name:"SCHPO"}]},{name:"Basidiomycota",children:[{name:"CRYNJ"},{name:"USTMA"},{name:"PUCGT"}]}]},{name:"BATDJ"}]}]},{name:"Amoebozoa",children:[{name:"ENTHI"},{name:"Dictyostelium",children:[{name:"DICDI"},{name:"DICPU"}]}]}]},{name:"Alveolata-Stramenopiles",children:[{name:"Alveolata",children:[{name:"PLAF7"},{name:"PARTE"}]},{name:"Stramenopiles",children:[{name:"THAPS"},{name:"PHYRM"}]}]},{name:"Excavates",children:[{name:"Trypanosomatidae",children:[{name:"LEIMA"},{name:"TRYB2"}]},{name:"Fornicata-Parabasalids",children:[{name:"GIAIC"},{name:"TRIVA"}]}]},{name:"Viridiplantae",children:[{name:"CHLRE"},{name:"Embryophyta",children:[{name:"Magnoliophyta",children:[{name:"Poaceae",children:[{name:"MAIZE"},{name:"BEP_clade",children:[{name:"ORYSJ"},{name:"BRADI"}]}]},{name:"Pentapetalae",children:[{name:"SOLLC"},{name:"rosids",children:[{name:"VITVI"},{name:"ARATH"},{name:"fabids",children:[{name:"SOYBN"},{name:"POPTR"}]}]}]}]},{name:"PHYPA"}]}]}]},{name:"Archaea",children:[{name:"NITMS"},{name:"KORCO"},{name:"Thermoprotei",children:[{name:"SULSO"},{name:"PYRAE"}]},{name:"Euryarchaeota",children:[{name:"METAC"},{name:"METJA"},{name:"HALSA"},{name:"THEKO"}]}]}]},{name:"Eubacteria",children:[{name:"Firmicutes",children:[{name:"CLOBH"},{name:"Bacilli",children:[{name:"STRR6"},{name:"Bacillales",children:[{name:"STAA8"},{name:"LISMO"},{name:"Bacillus",children:[{name:"BACSU"},{name:"BACCR"}]}]}]}]},{name:"Actinomycetales",children:[{name:"STRCO"},{name:"MYCTU"}]},{name:"MYCGE"},{name:"THEMA"},{name:"DEIRA"},{name:"CHLAA"},{name:"Cyanobacteria",children:[{name:"GLOVI"},{name:"SYNY3"}]},{name:"LEPIN"},{name:"BACTN"},{name:"CHLTR"},{name:"AQUAE"},{name:"RHOBA"},{name:"THEYD"},{name:"DICTD"},{name:"FUSNN"},{name:"Proteobacteria",children:[{name:"HELPY"},{name:"NEIMB"},{name:"GEOSL"},{name:"BRADU"},{name:"Gammaproteobacteria",children:[{name:"COXBU"},{name:"HAEIN"},{name:"SHEON"},{name:"VIBCH"},{name:"XANCP"},{name:"PSEAE"},{name:"Enterobacteriaceae",children:[{name:"SALTY"},{name:"YERPE"},{name:"ECOLI"}]}]}]}]}]}];
  options: ITreeOptions = {
    actionMapping : {
      mouse: {
        contextMenu: (tree, node, $event) => {
          $event.preventDefault();
          alert(`context menu for ${node.data.name}`);
        },
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) {
            TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
          }
        },
        click: (tree, node, $event) => {
          /* $event.shiftKey
            ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
            : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);*/
          //console.log(node.data.name);
          this.species = node.data.name;
          //console.log(this.species);
          this.router.navigateByUrl(`/species/${this.species}`);
          
        }
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
      }
    }
  };

  //onEvent = ($event) => console.log($event);

  /* @ViewChild('tree') tree;

  ngAfterViewInit() {
    const someNode = this.tree.treeModel.getNodeById('someId');
    someNode.expand();
           
    const firstRoot = this.tree.treeModel.roots[0];
    firstRoot.setActiveAndVisible();
  } */

  //private lists: List[] = [];
  //species: string[];
  //encodeURIComponent = encodeURIComponent;

  /* constructor(private loader: AppDataLoader) { }

  ngOnInit() {
    this.loader.get('http://localhost:3000/genelist/species/', (recon) => {
      this.speciess = _.keys(recon.lists);
      console.log(recon);
      console.log(this.speciess);
    });
  } */

  /* public loadSpecies() {

    //Get all species list from server and update the lists property
    this.listServ.getAllSpecies().subscribe(
        response => this.species = response)

        this.listServ.getAllSpecies().subscribe(
          response => {
            this.species = response[0].species;
            console.log(this.species);
          });
        } */


}
