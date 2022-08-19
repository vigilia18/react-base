export interface ITools{
    name:string;
    id:number;
    target:string;
    category:string;
    cssDefault:{key:string,value:string|number}[];
    attributes:{key:string,value:string|number}[];
}