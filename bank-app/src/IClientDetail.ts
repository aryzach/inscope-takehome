export interface IClientDetail {
    count: number;
    next: string;
    previous: string;
    results: IClientResults[];
}

export interface IClientResults {
    id: string;
    detail: string;
    amount: string;
    timestamp: string;
}
