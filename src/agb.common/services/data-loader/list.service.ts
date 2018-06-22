import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import { List, SpeciesGeneList } from '../models/List'

import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

    constructor(private http: Http) { }

    private serverApi= 'http://localhost:3000';

    /* public getListsBySpecies(species):Observable<List[]> {

        let URI = `${this.serverApi}/genelist/species/${species}`;
        //let URI = 'http://localhost:3000/genelist/species/Eukaryota';
        //console.log(this.http.get(URI));
        return this.http.get(URI)
            .map(res => res.json())
            .map(res => <List[]>res.lists);
    } */

    public getListsBySpecies(species):Observable<SpeciesGeneList[]> {

        let URI = `${this.serverApi}/genelist/species/${species}`;
        //let URI = 'http://localhost:3000/genelist/species/Eukaryota';
        //console.log(this.http.get(URI));
        return this.http.get(URI)
            .map(res => res.json())
            .map(res => <SpeciesGeneList[]>res.lists);
    }

    public getAllSpecies() {

        let URI = `${this.serverApi}/genelist/species`;
        //let URI = 'http://localhost:3000/genelist/species';
        //console.log(this.http.get(URI));
        /* console.log(this.http.get(URI)
        .map(res => res.json())
        .map(res => res.lists)); */
        return this.http.get(URI)
            .map(res => res.json())
            .map(res => res.lists);
    }

    public getGeneByPtn(gene):Observable<List[]> {

        let URI = `${this.serverApi}/genelist/gene/${gene}`;
        return this.http.get(URI)
            .map(res => res.json())
            .map(res => <List[]>res.lists);
    }

    public getAllGenes() {

        let URI = `${this.serverApi}/genelist`;
        //let URI = 'http://localhost:3000/genelist/species';
        //console.log(this.http.get(URI));
        /* console.log(this.http.get(URI)
        .map(res => res.json())
        .map(res => res.lists)); */
        return this.http.get(URI)
            .map(res => res.json())
            .map(res => <List[]>res.lists);
    }
}