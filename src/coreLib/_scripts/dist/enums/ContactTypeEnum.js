"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactTypeEnum = void 0;
/** Represents all forms of contact information */
var ContactTypeEnum;
(function (ContactTypeEnum) {
    /** Primary Phone Number */
    ContactTypeEnum[ContactTypeEnum["PrimaryPhone"] = 10] = "PrimaryPhone";
    /** Primary Phone Extension */
    ContactTypeEnum[ContactTypeEnum["PrimaryExtension"] = 11] = "PrimaryExtension";
    /** Secondary Phone Number */
    ContactTypeEnum[ContactTypeEnum["SecondaryPhone"] = 20] = "SecondaryPhone";
    /** Secondary Phone Extension */
    ContactTypeEnum[ContactTypeEnum["SecondaryExtension"] = 21] = "SecondaryExtension";
    /** Mobile Phone Number */
    ContactTypeEnum[ContactTypeEnum["MobilePhone"] = 30] = "MobilePhone";
    /** Email Address */
    ContactTypeEnum[ContactTypeEnum["EmailAddress"] = 40] = "EmailAddress";
    /** Fax Number */
    ContactTypeEnum[ContactTypeEnum["Fax"] = 50] = "Fax";
    /** Fax Extension */
    ContactTypeEnum[ContactTypeEnum["FaxExtension"] = 51] = "FaxExtension";
})(ContactTypeEnum = exports.ContactTypeEnum || (exports.ContactTypeEnum = {}));
