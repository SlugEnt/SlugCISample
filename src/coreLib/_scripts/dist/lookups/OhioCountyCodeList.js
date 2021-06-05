"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OhioCountyCodeList = exports.OhioCountyCode = void 0;
class OhioCountyCode {
    constructor(code, description) {
        this.code = code;
        this.description = description;
    }
}
exports.OhioCountyCode = OhioCountyCode;
class OhioCountyCodeList {
    constructor() {
        this.items = new Map();
        this.items.set("01", new OhioCountyCode("01", "ADAMS"));
        this.items.set("02", new OhioCountyCode("02", "ALLEN"));
        this.items.set("03", new OhioCountyCode("03", "ASHLAND"));
        this.items.set("04", new OhioCountyCode("04", "ASHTABULA"));
        this.items.set("05", new OhioCountyCode("05", "ATHENS"));
        this.items.set("06", new OhioCountyCode("06", "AUGLAIZE"));
        this.items.set("07", new OhioCountyCode("07", "BELMONT"));
        this.items.set("08", new OhioCountyCode("08", "BROWN"));
        this.items.set("09", new OhioCountyCode("09", "BUTLER"));
        this.items.set("10", new OhioCountyCode("10", "CARROLL"));
        this.items.set("11", new OhioCountyCode("11", "CHAMPAIGN"));
        this.items.set("12", new OhioCountyCode("12", "CLARK"));
        this.items.set("13", new OhioCountyCode("13", "CLERMONT"));
        this.items.set("14", new OhioCountyCode("14", "CLINTON"));
        this.items.set("15", new OhioCountyCode("15", "COLUMBIANA"));
        this.items.set("16", new OhioCountyCode("16", "COSHOCTON"));
        this.items.set("17", new OhioCountyCode("17", "CRAWFORD"));
        this.items.set("18", new OhioCountyCode("18", "CUYAHOGA"));
        this.items.set("19", new OhioCountyCode("19", "DARKE"));
        this.items.set("20", new OhioCountyCode("20", "DEFIANCE"));
        this.items.set("21", new OhioCountyCode("21", "DELAWARE"));
        this.items.set("22", new OhioCountyCode("22", "ERIE"));
        this.items.set("23", new OhioCountyCode("23", "FAIRFIELD"));
        this.items.set("24", new OhioCountyCode("24", "FAYETTE"));
        this.items.set("25", new OhioCountyCode("25", "FRANKLIN"));
        this.items.set("26", new OhioCountyCode("26", "FULTON"));
        this.items.set("27", new OhioCountyCode("27", "GALLIA"));
        this.items.set("28", new OhioCountyCode("28", "GEAUGA"));
        this.items.set("29", new OhioCountyCode("29", "GREENE"));
        this.items.set("30", new OhioCountyCode("30", "GUERNSEY"));
        this.items.set("31", new OhioCountyCode("31", "HAMILTON"));
        this.items.set("32", new OhioCountyCode("32", "HANCOCK"));
        this.items.set("33", new OhioCountyCode("33", "HARDIN"));
        this.items.set("34", new OhioCountyCode("34", "HARRISON"));
        this.items.set("35", new OhioCountyCode("35", "HENRY"));
        this.items.set("36", new OhioCountyCode("36", "HIGHLAND"));
        this.items.set("37", new OhioCountyCode("37", "HOCKING"));
        this.items.set("38", new OhioCountyCode("38", "HOLMES"));
        this.items.set("39", new OhioCountyCode("39", "HURON"));
        this.items.set("40", new OhioCountyCode("40", "JACKSON"));
        this.items.set("41", new OhioCountyCode("41", "JEFFERSON"));
        this.items.set("42", new OhioCountyCode("42", "KNOX"));
        this.items.set("43", new OhioCountyCode("43", "LAKE"));
        this.items.set("44", new OhioCountyCode("44", "LAWRENCE"));
        this.items.set("45", new OhioCountyCode("45", "LICKING"));
        this.items.set("46", new OhioCountyCode("46", "LOGAN"));
        this.items.set("47", new OhioCountyCode("47", "LORAIN"));
        this.items.set("48", new OhioCountyCode("48", "LUCAS"));
        this.items.set("49", new OhioCountyCode("49", "MADISON"));
        this.items.set("50", new OhioCountyCode("50", "MAHONING"));
        this.items.set("51", new OhioCountyCode("51", "MARION"));
        this.items.set("52", new OhioCountyCode("52", "MEDINA"));
        this.items.set("53", new OhioCountyCode("53", "MEIGS"));
        this.items.set("54", new OhioCountyCode("54", "MERCER"));
        this.items.set("55", new OhioCountyCode("55", "MIAMI"));
        this.items.set("56", new OhioCountyCode("56", "MONROE"));
        this.items.set("57", new OhioCountyCode("57", "MONTGOMERY"));
        this.items.set("58", new OhioCountyCode("58", "MORGAN"));
        this.items.set("59", new OhioCountyCode("59", "MORROW"));
        this.items.set("60", new OhioCountyCode("60", "MUSKINGUM"));
        this.items.set("61", new OhioCountyCode("61", "NOBLE"));
        this.items.set("62", new OhioCountyCode("62", "OTTAWA"));
        this.items.set("63", new OhioCountyCode("63", "PAULDING"));
        this.items.set("64", new OhioCountyCode("64", "PERRY"));
        this.items.set("65", new OhioCountyCode("65", "PICKAWAY"));
        this.items.set("66", new OhioCountyCode("66", "PIKE"));
        this.items.set("67", new OhioCountyCode("67", "PORTAGE"));
        this.items.set("68", new OhioCountyCode("68", "PREBLE"));
        this.items.set("69", new OhioCountyCode("69", "PUTNAM"));
        this.items.set("70", new OhioCountyCode("70", "RICHLAND"));
        this.items.set("71", new OhioCountyCode("71", "ROSS"));
        this.items.set("72", new OhioCountyCode("72", "SANDUSKY"));
        this.items.set("73", new OhioCountyCode("73", "SCIOTO"));
        this.items.set("74", new OhioCountyCode("74", "SENECA"));
        this.items.set("75", new OhioCountyCode("75", "SHELBY"));
        this.items.set("76", new OhioCountyCode("76", "STARK"));
        this.items.set("77", new OhioCountyCode("77", "SUMMIT"));
        this.items.set("78", new OhioCountyCode("78", "TRUMBULL"));
        this.items.set("79", new OhioCountyCode("79", "TUSCARAWAS"));
        this.items.set("80", new OhioCountyCode("80", "UNION"));
        this.items.set("81", new OhioCountyCode("81", "VAN WERT"));
        this.items.set("82", new OhioCountyCode("82", "VINTON"));
        this.items.set("83", new OhioCountyCode("83", "WARREN"));
        this.items.set("84", new OhioCountyCode("84", "WASHINGTON"));
        this.items.set("85", new OhioCountyCode("85", "WAYNE"));
        this.items.set("86", new OhioCountyCode("86", "WILLIAMS"));
        this.items.set("87", new OhioCountyCode("87", "WOOD"));
        this.items.set("88", new OhioCountyCode("88", "WYANDOT"));
        this.items.set("94", new OhioCountyCode("94", "OUT OF STATE"));
    }
    /**
     *
     * @param code
     */
    keyToValueDisplayString(code) {
        return `${code} - ${this.items.get(code).description}`;
    }
}
exports.OhioCountyCodeList = OhioCountyCodeList;
