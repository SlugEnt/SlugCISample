import { PrimaryKeyTypeEnum } from "../enums/PrimaryKeyTypeEnum";

/**  */
export interface SnapshotReportData<T> {

    /**  */
    primaryKeyTypeEnum: PrimaryKeyTypeEnum;
    /**  */
    primaryKeyValue: number;
    /**  */
    headerColumns: SnapshotReportDataHeaderColumn[];
    /**  */
    reportDataRows: T[];
}

/**  */
export interface SnapshotReportDataHeaderColumn {

    /**  */
    header: string;
    /**  */
    field: string;
}

/**  */
export interface ISnapshotReportDataRow {
}