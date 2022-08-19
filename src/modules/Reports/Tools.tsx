import { useSelector } from "react-redux";
import { ITools } from "../../Interface/Tools.interface";
import { IThemeExport } from "../../Themes/colors";
import './css/Tools.css';
import tools from "./data/tools.json";

type prop={
    h:number;
    getTool:Function;
}

export const Tools=({h,getTool}:prop)=>{

    const theme:IThemeExport=useSelector((state:any)=>state.theme);
    const categorys=['text','formas','imagenes'];
    const used:keyof typeof theme=theme.used;
    const height=window.screen.height-h;
    
    const LiItem=(e:ITools,i:number,cat:string)=>{
        
        if(e.category===cat){
            return <li className='ul-items' onClick={(event)=>selectedElement(e)} key={i+Date.now()-3} style={{borderBottom:`0.3px solid ${theme[used].sombra}`}}>{e.name}</li>
        }
        return null;
    }
    
    const selectedElement=(tool:ITools)=>{
        getTool(tool)
    }



    return(
        <div className="tool-bar" style={{background:theme[used].subFondo,height:height-h,boxShadow:`2px 2px 6px ${theme[used].sombra}`}}>
            <ul className="ul-tools">
                {
                    categorys.map((e,i)=>(
                        <ul key={i+Date.now()-2}>
                            <li className="ul-title" style={{color:theme[used].toggleText,background:theme[used].primary}}>{e}</li>
                            {
                            tools.map((_e:ITools,_i)=>LiItem(_e,_i,e))
                            }
                        </ul>
                    ))
                }
            </ul>
        </div>
    )
}