export interface TeamTypeAnalysis {
    type: string;

    weakCount: number;
    resistCount: number;
    immuneCount: number;

    weakMembers: number[];
    resistMembers: number[];
    immuneMembers: number[];
}

