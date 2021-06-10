export interface TableSortOptions {
    /**  Column Name that should be sorted */
    columnName: string;
    /** Direction that it should be sorted */
    sortDirection: SortDirectionEnum;
}

export enum SortDirectionEnum {
    Ascending,
    Descending
}