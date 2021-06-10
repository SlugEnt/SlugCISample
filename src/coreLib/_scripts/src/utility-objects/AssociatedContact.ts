import { ContactTypeEnum } from "../enums/ContactTypeEnum";

export interface AssociatedContact {
    id: number;
    fullName: string;
    isPrimary: boolean;
    contactInformation: AssociatedContactInformation[];
}

export interface AssociatedContactInformation {
    contactType: ContactTypeEnum;
    value: string;
}