import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../context/themes/ThemeStore";
import Theme, { IThemeExport } from "../../Themes/colors";

type prop={
    text:string;
    click?:Function;
    children?:JSX.Element;
    back?:keyof typeof Theme.Light;
    hover?:keyof typeof Theme.Light;
};


export const Button=({text,click,children,back='primary',hover='secondary'}:prop)=>{

    const stateTheme:IThemeExport=useSelector((state:RootState)=>state.theme);
    const used:keyof typeof stateTheme=stateTheme.used;
    const handleClick=(e:any)=>{
        if(click===undefined){
            return;
        }
        click(e);
    }


    return (
        <button className="btn-custom" style={{background:stateTheme[used][back], boxShadow:`2px 2px 6px ${stateTheme[used].sombra}`}} onClick={(e)=>handleClick(e)}>
            <div style={{background:stateTheme[used][hover]}} className="circle">
            </div>
            <div className='inner flex-h'>{children}<p style={{color:stateTheme[used].toggleText}}>{' '+text}</p></div>
        </button>
    )
}