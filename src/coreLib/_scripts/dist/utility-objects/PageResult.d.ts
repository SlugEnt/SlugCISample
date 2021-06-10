export interface PageResult<T> {
    /** Total Record Count */
    totalRecords: number;
    /** Selected Page Values for the given Page Number and Page Size */
    pageValues: T[];
}
