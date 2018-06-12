import * as d3 from 'd3';

export interface speciesTreeNode extends d3.layout.tree.Node {
  name: string;
  children: Array<speciesTreeNode>;
  type: speciesTreeNodeType;
  active: boolean;
  highlight:boolean;
}

export enum speciesTreeNodeType {
  All,
  Pathway,
  Solution
}
