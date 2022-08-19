export type ITheme={
    Light:string;
    Dark:string;
}
const base:ITheme={
    Light: "",
    Dark: ""
}
export type IColors={
    primary:string;
    secondary:string;
    text:string;
    toggleText:string;
    sombra:string;
    togleSombra:string;
    fondo:string;
    subFondo:string;
    title:string;
    success:string;
    error:string;
}

const Light={
    primary:'#248CF3',
    success:"rgba(20,255,110,0.95)",
    error:"rgba(255,180,50)",
    secondary:"#F3244A",
    text:"rgba(10,10,10,0.8)",
    toggleText:"rgba(255,255,255,0.9)",
    sombra:"rgba(10,10,10,0.2)",
    togleSombra:"rgba(255,255,255,0.8)",
    fondo:"rgba(245,245,245,0.8)",
    subFondo:'rgba(0,0,0,0.05)',
    title:'DynaPuff'
}

const Dark={
    primary:'#248CF3',
    success:"rgba(20,255,110,0.95)",
    error:"rgba(255,50,80)",
    secondary:"#F3244A",
    text:"rgba(255,255,255,0.8)",
    toggleText:"rgba(10,10,10,0.8)",
    togleSombra:"rgba(10,10,10,0.8)",
    sombra:"rgba(255,255,255,0.8)",
    fondo:"rgba(10,10,10,0.8)",
    subFondo:'rgba(255,255,255,0.05)',
    title:'DynaPuff'
}

export type IThemeExport={Dark:IColors,Light:IColors,used:keyof typeof base};

const Theme:IThemeExport={Light,Dark,used:'Light'};

export default Theme;