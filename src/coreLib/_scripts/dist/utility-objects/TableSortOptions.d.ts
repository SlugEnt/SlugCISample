export interface TableSortOptions {
    /**  Column Name that should be sorted */
    columnName: string;
    /** Direction that it should be sorted */
    sortDirection: SortDirectionEnum;
}
export declare enum SortDirectionEnum {
    Ascending = 0,
    Descending = 1
}
