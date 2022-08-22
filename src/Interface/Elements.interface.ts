export interface elementProp{
    text:JSX.Element;
    color?:string;
    padding?:number;
    margin?:number;
    fontSize?:string;
    pos?:{
        position:'relative'|'absoulte';
        top:number;
        left:number;
    };
}

export interface ElementP extends elementProp{}