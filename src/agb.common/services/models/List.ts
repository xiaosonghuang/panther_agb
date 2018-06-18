
export interface List {
    ptn: string;
    name: string;
    species: string;
    sequence: string;
    type: string;

}

export interface GeneList {
    species: string;
    genes: [
        {
            ptn:string;
            name:string;
        }
    ];
}