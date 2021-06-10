/** */
export interface DynamicPageResult<T> {
    /** */
    totalRecords: number;
    /** */
    headerColumns: HeaderColumn[];
    /** */
    pageValues: T[];
}
/** */
export interface HeaderColumn {
    /** */
    header: string;
    /** */
    pixelWidth: number;
    /** */
    allowSorting: boolean;
    /** */
    field: string;
}
/** */
export interface IDynamicPageResultRow {
}
