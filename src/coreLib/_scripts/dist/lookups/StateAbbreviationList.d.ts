export declare class StateAbbreviation {
    /** Abbreviation */
    readonly abbreviation: string;
    /** Name */
    readonly name: string;
    constructor(abbreviation: string, name: string);
}
export declare class StateAbbreviationList {
    /** Dictionary of all the State Abbreviations. Key: Code | Value: StateAbbreviation */
    readonly items: Map<string, StateAbbreviation>;
    /**
     *
     * @param code
     */
    keyToValueDisplayString(abbreviation: string): string;
    constructor();
}
