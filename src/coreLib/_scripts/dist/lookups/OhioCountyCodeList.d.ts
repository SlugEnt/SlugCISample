export declare class OhioCountyCode {
    /** Code */
    readonly code: string;
    /** Description */
    readonly description: string;
    constructor(code: string, description: string);
}
export declare class OhioCountyCodeList {
    /** Dictionary of all the Ohio County Codes. Key: Code | Value: OhioCountyCode */
    readonly items: Map<string, OhioCountyCode>;
    /**
     *
     * @param code
     */
    keyToValueDisplayString(code: string): string;
    constructor();
}
