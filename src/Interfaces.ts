import type { Graph } from "graphlib";
import type MyGraph from "src/MyGraph";

export interface ResolvedLinks {
    [from: string]: {
        [to: string]: number
    }
}

export type Analyses =
    // "Centrality" | 
    "Similarity" |
    "Link Prediction" |
    "Co-Citations";

export type Subtypes =
    'Adamic Adar'
    | 'Common Neighbours'
    | 'Jaccard'
    | 'Co-Citations'
    | 'testSubtype'
// | 'Closeness'

export type GraphData = {
    [matrix in Subtypes]: number[][] | CoCitationRes[][];
};

export interface CoCitationRes {
    measure: number;
    sentences: string[];
}

export type AnalysisAlg<T> = (a: string) => Promise<T>;

export interface GraphAnalysisSettings {
    noInfinity: boolean;
    noZero: boolean;
    defaultAnalysisType: Analyses;
    debugMode: boolean;
    superDebugMode: boolean;
}

export type AnalysisForAll = (
    alg: AnalysisAlg<number[]>,
    g: Graph,
    currNode: string
) => MyGraph