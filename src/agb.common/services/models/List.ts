
export interface List {
    ptn: string;
    name: string;
    species: string;
    sequence: string;
    type: string;

}

export interface SpeciesGeneList {
    short_name: string;
    taxon_id: string;
    long_name: string;
    genes: [
        {
            ptn:string;
            name:string;
            event:string;
            pthr:string;
            proxy_org:string;
            proxy_gene:string;
        }
    ];
}