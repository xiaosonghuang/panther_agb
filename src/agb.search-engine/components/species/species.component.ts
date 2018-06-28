import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../../../agb.common/services/data-loader/list.service';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';

@Component({
  selector: 'app-species',
  templateUrl: 'species.component.html',
  styleUrls: ['species.component.css'],
})

export class speciesComponent {
  
  constructor (private router: Router, private listServ: ListService) {}

  @ViewChild('tree') tree;

  ngAfterViewInit() {
    this.tree.treeModel.expandAll();
  }

  encodeURIComponent = encodeURIComponent;
  
  nodes = [{name:"LUCA",short_name:"LUCA",children:[{name:"Archaea-Eukaryota",short_name:"Archaea-Eukaryota",children:[{name:"Eukaryota",short_name:"Eukaryota",children:[{name:"Unikonts",short_name:"Unikonts",children:[{name:"Opisthokonts",short_name:"Opisthokonts",children:[{name:"Metazoa-Choanoflagellida",short_name:"Metazoa-Choanoflagellida",children:[{name:"Eumetazoa",short_name:"Eumetazoa",children:[{name:"Bilateria",short_name:"Bilateria",children:[{name:"Deuterostomia",short_name:"Deuterostomia",children:[{name:"Chordata",short_name:"Chordata",children:[{name:"Craniata-Cephalochordata",short_name:"Craniata-Cephalochordata",children:[{name:"Euteleostomi",short_name:"Euteleostomi",children:[{name:"Tetrapoda",short_name:"Tetrapoda",children:[{name:"Amniota",short_name:"Amniota",children:[{name:"Mammalia",short_name:"Mammalia",children:[{name:"Theria",short_name:"Theria",children:[{name:"Eutheria",short_name:"Eutheria",children:[{name:"Euarchontoglires",short_name:"Euarchontoglires",children:[{name:"Catarrhini",short_name:"Catarrhini",children:[{name:"Homininae",short_name:"Homininae",children:[{name:"Homo-Pan",short_name:"Homo-Pan",children:[{name:"Homo sapiens",short_name:"HUMAN"},{name:"Pan troglodytes",short_name:"PANTR"}]},{name:"Gorilla gorilla gorilla",short_name:"GORGO"}]},{name:"Macaca mulatta",short_name:"MACMU"}]},{name:"Murinae",short_name:"Murinae",children:[{name:"Mus musculus",short_name:"MOUSE"},{name:"Rattus norvegicus",short_name:"RAT"}]}]},{name:"Laurasiatheria",short_name:"Laurasiatheria",children:[{name:"Perissodactyla",short_name:"Perissodactyla",children:[{name:"Artiodactyla",short_name:"Artiodactyla",children:[{name:"Bos taurus",short_name:"BOVIN"},{name:"Sus scrofa",short_name:"PIG"}]},{name:"Equus caballus",short_name:"HORSE"}]},{name:"Carnivora",short_name:"Carnivora",children:[{name:"Felis catus",short_name:"FELCA"},{name:"Canis lupus familiaris",short_name:"CANLF"}]}]}]},{name:"Monodelphis domestica",short_name:"MONDO"}]},{name:"Ornithorhynchus anatinus",short_name:"ORNAN"}]},{name:"Sauria",short_name:"Sauria",children:[{name:"Gallus gallus",short_name:"CHICK"},{name:"Anolis carolinensis",short_name:"ANOCA"}]}]},{name:"Xenopus tropicalis",short_name:"XENTR"}]},{name:"Neopterygii",short_name:"Neopterygii",children:[{name:"Teleostei",short_name:"Teleostei",children:[{name:"Oryzias latipes",short_name:"ORYLA"},{name:"Danio rerio",short_name:"DANRE"}]},{name:"lepisosteus oculatus",short_name:"LEPOC"}]}]},{name:"Branchiostoma floridae",short_name:"BRAFL"}]},{name:"Ciona intestinalis",short_name:"CIOIN"}]},{name:"Strongylocentrotus purpuratus",short_name:"STRPU"}]},{name:"Protostomia",short_name:"Protostomia",children:[{name:"Ecdysozoa",short_name:"Ecdysozoa",children:[{name:"Rhabditida-Chromadorea",short_name:"Rhabditida-Chromadorea",children:[{name:"Caenorhabditis",short_name:"Caenorhabditis",children:[{name:"Caenorhabditis elegans",short_name:"CAEEL"},{name:"Caenorhabditis briggsae",short_name:"CAEBR"}]},{name:"Pristionchus pacificus",short_name:"PRIPA"}]},{name:"Arthropoda",short_name:"Arthropoda",children:[{name:"Hexapoda-Crustacea",short_name:"Hexapoda-Crustacea",children:[{name:"Endopterygota",short_name:"Endopterygota",children:[{name:"Diptera",short_name:"Diptera",children:[{name:"Drosophila melanogaster",short_name:"DROME"},{name:"Anopheles gambiae",short_name:"ANOGA"}]},{name:"Tribolium castaneum",short_name:"TRICA"}]},{name:"Daphnia pulex",short_name:"DAPPU"}]},{name:"Ixodes scapularis",short_name:"IXOSC"}]}]},{name:"helobdella robusta",short_name:"HELRO"}]}]},{name:"Nematostella vectensis",short_name:"NEMVE"},{name:"Trichoplax adhaerens",short_name:"TRIAD"}]},{name:"Monosiga brevicollis",short_name:"MONBE"}]},{name:"Fungi",short_name:"Fungi",children:[{name:"Dikarya",short_name:"Dikarya",children:[{name:"Ascomycota",short_name:"Ascomycota",children:[{name:"Pezizomycotina-Saccharomycotina",short_name:"Pezizomycotina-Saccharomycotina",children:[{name:"Saccharomycetales",short_name:"Saccharomycetales",children:[{name:"Saccharomycetaceae-Candida",short_name:"Saccharomycetaceae-Candida",children:[{name:"Saccharomycetaceae",short_name:"Saccharomycetaceae",children:[{name:"Saccharomyces cerevisiae",short_name:"YEAST"},{name:"Ashbya gossypii",short_name:"ASHGO"}]},{name:"Candida albicans",short_name:"CANAL"}]},{name:"Yarrowia lipolytica",short_name:"YARLI"}]},{name:"Pezizomycotina",short_name:"Pezizomycotina",children:[{name:"Aspergillus",short_name:"Aspergillus",children:[{name:"Emericella nidulans",short_name:"EMENI"},{name:"Neosartorya fumigata",short_name:"ASPFU"}]},{name:"Sordariomycetes-Leotiomycetes",short_name:"Sordariomycetes-Leotiomycetes",children:[{name:"Sordariomyceta",short_name:"Sordariomyceta",children:[{name:"Neurospora crassa",short_name:"NEUCR"},{name:"Sclerotinia sclerotiorum",short_name:"SCLS1"}]},{name:"Phaeosphaeria nodorum",short_name:"PHANO"}]}]}]},{name:"Schizosaccharomyces pombe",short_name:"SCHPO"}]},{name:"Basidiomycota",short_name:"Basidiomycota",children:[{name:"Cryptococcus neoformans",short_name:"CRYNJ"},{name:"Ustilago maydis",short_name:"USTMA"},{name:"Puccinia graminis",short_name:"PUCGT"}]}]},{name:"Batrachochytrium dendrobatidis",short_name:"BATDJ"}]}]},{name:"Amoebozoa",short_name:"Amoebozoa",children:[{name:"Entamoeba histolytica",short_name:"ENTHI"},{name:"Dictyostelium",short_name:"Dictyostelium",children:[{name:"Dictyostelium discoideum",short_name:"DICDI"},{name:"Dictyostelium purpureum",short_name:"DICPU"}]}]}]},{name:"Alveolata-Stramenopiles",short_name:"Alveolata-Stramenopiles",children:[{name:"Alveolata",short_name:"Alveolata",children:[{name:"Plasmodium falciparum",short_name:"PLAF7"},{name:"Paramecium tetraurelia",short_name:"PARTE"}]},{name:"Stramenopiles",short_name:"Stramenopiles",children:[{name:"Thalassiosira pseudonana",short_name:"THAPS"},{name:"Phytophthora ramorum",short_name:"PHYRM"}]}]},{name:"Excavates",short_name:"Excavates",children:[{name:"Trypanosomatidae",short_name:"Trypanosomatidae",children:[{name:"Leishmania major",short_name:"LEIMA"},{name:"Trypanosoma brucei",short_name:"TRYB2"}]},{name:"Fornicata-Parabasalids",short_name:"Fornicata-Parabasalids",children:[{name:"Giardia intestinalis",short_name:"GIAIC"},{name:"Trichomonas vaginalis",short_name:"TRIVA"}]}]},{name:"Viridiplantae",short_name:"Viridiplantae",children:[{name:"Chlamydomonas reinhardtii",short_name:"CHLRE"},{name:"Embryophyta",short_name:"Embryophyta",children:[{name:"Magnoliophyta",short_name:"Magnoliophyta",children:[{name:"Poaceae",short_name:"Poaceae",children:[{name:"Zea mays",short_name:"MAIZE"},{name:"BEP_clade",children:[{name:"Oryza sativa",short_name:"ORYSJ"},{name:"Brachypodium distachyon",short_name:"BRADI"}]}]},{name:"Pentapetalae",short_name:"Pentapetalae",children:[{name:"Solanum lycopersicum",short_name:"SOLLC"},{name:"rosids",short_name:"rosids",children:[{name:"Vitis vinifera",short_name:"VITVI"},{name:"Arabidopsis thaliana",short_name:"ARATH"},{name:"fabids",short_name:"fabids",children:[{name:"Glycine max",short_name:"SOYBN"},{name:"Populus trichocarpa",short_name:"POPTR"}]}]}]}]},{name:"Physcomitrella patens",short_name:"PHYPA"}]}]}]},{name:"Archaea",short_name:"Archaea",children:[{name:"Nitrosopumilus maritimus",short_name:"NITMS"},{name:"Korarchaeum cryptofilum",short_name:"KORCO"},{name:"Thermoprotei",short_name:"Thermoprotei",children:[{name:"Sulfolobus solfataricus",short_name:"SULSO"},{name:"Pyrobaculum aerophilum",short_name:"PYRAE"}]},{name:"Euryarchaeota",short_name:"Euryarchaeota",children:[{name:"Methanosarcina acetivorans",short_name:"METAC"},{name:"Methanocaldococcus jannaschii",short_name:"METJA"},{name:"Halobacterium salinarum",short_name:"HALSA"},{name:"Thermococcus kodakaraensis",short_name:"THEKO"}]}]}]},{name:"Eubacteria",short_name:"Eubacteria",children:[{name:"Firmicutes",short_name:"Firmicutes",children:[{name:"Clostridium botulinum",short_name:"CLOBH"},{name:"Bacilli",short_name:"Bacilli",children:[{name:"Streptococcus pneumoniae",short_name:"STRR6"},{name:"Bacillales",short_name:"Bacillales",children:[{name:"Staphylococcus aureus",short_name:"STAA8"},{name:"Listeria monocytogenes",short_name:"LISMO"},{name:"Bacillus",short_name:"Bacillus",children:[{name:"Bacillus subtilis",short_name:"BACSU"},{name:"Bacillus cereus",short_name:"BACCR"}]}]}]}]},{name:"Actinomycetales",short_name:"Actinomycetales",children:[{name:"Streptomyces coelicolor",short_name:"STRCO"},{name:"Mycobacterium tuberculosis",short_name:"MYCTU"}]},{name:"mycoplasma genitalium",short_name:"MYCGE"},{name:"Thermotoga maritima",short_name:"THEMA"},{name:"Deinococcus radiodurans",short_name:"DEIRA"},{name:"Chloroflexus aurantiacus",short_name:"CHLAA"},{name:"Cyanobacteria",short_name:"Cyanobacteria",children:[{name:"Gloeobacter violaceus",short_name:"GLOVI"},{name:"Synechocystis",short_name:"SYNY3"}]},{name:"Leptospira interrogans",short_name:"LEPIN"},{name:"Bacteroides thetaiotaomicron",short_name:"BACTN"},{name:"Chlamydia trachomatis",short_name:"CHLTR"},{name:"Aquifex aeolicus",short_name:"AQUAE"},{name:"Rhodopirellula baltica",short_name:"RHOBA"},{name:"Thermodesulfovibrio yellowstonii",short_name:"THEYD"},{name:"Dictyoglomus turgidum",short_name:"DICTD"},{name:"Fusobacterium nucleatum",short_name:"FUSNN"},{name:"Proteobacteria",short_name:"Proteobacteria",children:[{name:"Helicobacter pylori",short_name:"HELPY"},{name:"Neisseria meningitidis serogroup b",short_name:"NEIMB"},{name:"Geobacter sulfurreducens",short_name:"GEOSL"},{name:"Bradyrhizobium diazoefficiens",short_name:"BRADU"},{name:"Gammaproteobacteria",short_name:"Gammaproteobacteria",children:[{name:"Coxiella burnetii",short_name:"COXBU"},{name:"Haemophilus influenzae",short_name:"HAEIN"},{name:"Shewanella oneidensis",short_name:"SHEON"},{name:"Vibrio cholerae",short_name:"VIBCH"},{name:"Xanthomonas campestris",short_name:"XANCP"},{name:"Pseudomonas aeruginosa",short_name:"PSEAE"},{name:"Enterobacteriaceae",short_name:"Enterobacteriaceae",children:[{name:"Salmonella typhimurium",short_name:"SALTY"},{name:"Yersinia pestis",short_name:"YERPE"},{name:"Escherichia coli",short_name:"ECOLI"}]}]}]}]}]}];
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
          $event.shiftKey
            ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
            : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
          //console.log(node.data.name);
          //this.species = node.data.short_name;
          //console.log(this.species);
          this.router.navigateByUrl(`/species/${node.data.short_name}`);
          
        }
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
      }
    },
    nodeHeight: 23,
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    useVirtualScroll: true,
    animateExpand: true,
    scrollOnActivate: true,
    animateSpeed: 30,
    animateAcceleration: 1.2,
    scrollContainer: document.body.parentElement
  };

}
