import { IItems } from "./Product.interface";

export interface IReport{
    slogan?:string;
    nameTemplate:string;
    infoCompanty:{
        companyName:string;
        dir?:string;
        phone?:{
            number:number;
            prefix:string;
        };
        fax?:string;
        email?:string;
        owner?:string;
    };
    typeReport:{
        idTypeReport:number;
        name:string;
    };
    managerCount:boolean;
    count?:number;
    infoLegal?:{
        required:boolean;
        info?:string;
    };
    client?:{
        required:boolean;
        email:string;
        id:string;
        names:string;
        lastnames:string;
        dir:string;
        typeDoc:string;
        phone:string;
    };
    noteDoc?:string;
    items?:IItems[];
};

export const initialReport:IReport={
    nameTemplate: "",
    infoCompanty: {
        companyName: "",
        dir: undefined,
        phone: undefined,
        fax: undefined,
        email: undefined,
        owner: undefined
    },
    typeReport: {
        idTypeReport: 0,
        name: ""
    },
    managerCount: false
}