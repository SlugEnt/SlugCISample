"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateAbbreviationList = exports.StateAbbreviation = void 0;
class StateAbbreviation {
    constructor(abbreviation, name) {
        this.abbreviation = abbreviation;
        this.name = name;
    }
}
exports.StateAbbreviation = StateAbbreviation;
class StateAbbreviationList {
    constructor() {
        this.items = new Map();
        this.items.set("NA", new StateAbbreviation("NA", "NOT APPLICABLE"));
        this.items.set("AL", new StateAbbreviation("AL", "ALABAMA"));
        this.items.set("AK", new StateAbbreviation("AK", "ALASKA"));
        this.items.set("AZ", new StateAbbreviation("AZ", "ARIZONA"));
        this.items.set("AR", new StateAbbreviation("AR", "ARKANSAS"));
        this.items.set("CA", new StateAbbreviation("CA", "CALIFORNIA"));
        this.items.set("CO", new StateAbbreviation("CO", "COLORADO"));
        this.items.set("CT", new StateAbbreviation("CT", "CONNECTICUT"));
        this.items.set("DE", new StateAbbreviation("DE", "DELAWARE"));
        this.items.set("FL", new StateAbbreviation("FL", "FLORIDA"));
        this.items.set("GA", new StateAbbreviation("GA", "GEORGIA"));
        this.items.set("HI", new StateAbbreviation("HI", "HAWAII"));
        this.items.set("ID", new StateAbbreviation("ID", "IDAHO"));
        this.items.set("IL", new StateAbbreviation("IL", "ILLINOIS"));
        this.items.set("IN", new StateAbbreviation("IN", "INDIANA"));
        this.items.set("IA", new StateAbbreviation("IA", "IOWA"));
        this.items.set("KS", new StateAbbreviation("KS", "KANSAS"));
        this.items.set("KY", new StateAbbreviation("KY", "KENTUCKY"));
        this.items.set("LA", new StateAbbreviation("LA", "LOUISIANA"));
        this.items.set("ME", new StateAbbreviation("ME", "MAINE"));
        this.items.set("MD", new StateAbbreviation("MD", "MARYLAND"));
        this.items.set("MA", new StateAbbreviation("MA", "MASSACHUSETTS"));
        this.items.set("MI", new StateAbbreviation("MI", "MICHIGAN"));
        this.items.set("MN", new StateAbbreviation("MN", "MINNESOTA"));
        this.items.set("MS", new StateAbbreviation("MS", "MISSISSIPPI"));
        this.items.set("MO", new StateAbbreviation("MO", "MISSOURI"));
        this.items.set("MT", new StateAbbreviation("MT", "MONTANA"));
        this.items.set("NE", new StateAbbreviation("NE", "NEBRASKA"));
        this.items.set("NV", new StateAbbreviation("NV", "NEVADA"));
        this.items.set("NH", new StateAbbreviation("NH", "NEW HAMPSHIRE"));
        this.items.set("NJ", new StateAbbreviation("NJ", "NEW JERSEY"));
        this.items.set("NM", new StateAbbreviation("NM", "NEW MEXICO"));
        this.items.set("NY", new StateAbbreviation("NY", "NEW YORK"));
        this.items.set("NC", new StateAbbreviation("NC", "NORTH CAROLINA"));
        this.items.set("ND", new StateAbbreviation("ND", "NORTH DAKOTA"));
        this.items.set("OH", new StateAbbreviation("OH", "OHIO"));
        this.items.set("OK", new StateAbbreviation("OK", "OKLAHOMA"));
        this.items.set("OR", new StateAbbreviation("OR", "OREGON"));
        this.items.set("PA", new StateAbbreviation("PA", "PENNSYLVANIA"));
        this.items.set("RI", new StateAbbreviation("RI", "RHODE ISLAND"));
        this.items.set("SC", new StateAbbreviation("SC", "SOUTH CAROLINA"));
        this.items.set("SD", new StateAbbreviation("SD", "SOUTH DAKOTA"));
        this.items.set("TN", new StateAbbreviation("TN", "TENNESSEE"));
        this.items.set("TX", new StateAbbreviation("TX", "TEXAS"));
        this.items.set("UT", new StateAbbreviation("UT", "UTAH"));
        this.items.set("VT", new StateAbbreviation("VT", "VERMONT"));
        this.items.set("VA", new StateAbbreviation("VA", "VIRGINIA"));
        this.items.set("WA", new StateAbbreviation("WA", "WASHINGTON"));
        this.items.set("WV", new StateAbbreviation("WV", "WEST VIRGINIA"));
        this.items.set("WI", new StateAbbreviation("WI", "WISCONSON"));
        this.items.set("WY", new StateAbbreviation("WY", "WYOMING"));
    }
    /**
     *
     * @param code
     */
    keyToValueDisplayString(abbreviation) {
        return `${abbreviation} - ${this.items.get(abbreviation).name}`;
    }
}
exports.StateAbbreviationList = StateAbbreviationList;
