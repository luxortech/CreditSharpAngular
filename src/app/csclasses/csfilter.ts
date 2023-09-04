export class Csfilter {
    title: string = "";
    type: filterType = filterType.none;
    value1: any;
    value2: any;
    selected: boolean = false;
}

export enum filterType {
    none        = 0,
    number      = 1,
    string      = 2,
    date        = 3,
    dateRange   = 4
};

export class csSearchDownloadRequest {
    searchKey : string = "";
    dateFrom : string = "";
    dateTo: string = ""
}
