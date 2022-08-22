import { useSelector } from "react-redux";
import { IThemeExport } from "../../Themes/colors";
import tool from './data/tools.json';
import './css/Tools.css';
import { useState } from "react";
import { ITools } from "../../Interface/Tools.interface";

type prop={
    getTool:Function;
}

export const Tools=({getTool}:prop)=>{
    
    const categorys=['text','formas','imagenes'];
    const [tools, setTools] = useState<ITools[]>(tool);
    const theme:IThemeExport=useSelector((state:any)=>state.theme)
    const used:keyof typeof theme=theme.used;
    
    return (
        <div className='tool-content' style={{border:'0.3px solid '+theme[used].subFondo,boxShadow:`2px 2px 6px ${theme[used].sombra}`}}>
            <ul className='ul-tool flex-v'>
                {
                    tools.map((e,i)=>(
                        <li className='tool' onClick={(_e)=>getTool(e)}  key={'_'+Date.now()+i} style={{border:`0.3px solid ${theme[used].sombra}`,boxShadow:`2px 2px 6px ${theme[used].sombra}`}}>
                            {e.name}
                        </li>
                    ))  
                }
            </ul>
        </div>
    )
}