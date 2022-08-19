import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ITools } from "../../Interface/Tools.interface"
import { IThemeExport } from "../../Themes/colors";
import './css/Property.css';

type prop={
    tool:ITools|null;
}

export const Propertys=({tool}:prop)=>{

    const theme:IThemeExport=useSelector((state:any)=>state.theme);
    const used:keyof typeof theme=theme.used;

    const [aux, setAux] = useState<{key:string,value:string}[]>([]);
    
    const [usedTool, setUsedTool] = useState(tool);

    useEffect(() => {
      setUsedTool(tool);
    }, [tool])
    


    return (
        <div className="propertyCont" style={{background:theme[used].toggleText,boxShadow:`3px 3px 6px ${theme[used].sombra}`,border:`0.3px solid ${theme[used].sombra}`}}>
            {
                usedTool===null?null:
            <>
            <div className="property-header" style={{background:theme[used].primary,color:theme[used].toggleText}}>
                <h3>{usedTool.name}</h3>
            </div>
            <div className="property-body">
                {
                    usedTool.attributes.map((e,i)=>(

                        <div className="input-control center-grid" key={Date.now()+Math.random()}>
                            <div className="label flex-center-v"  style={{background:theme[used].primary,color:theme[used].fondo}}>
                                <p>{e.key}</p>
                            </div>
                            <div className="input">
                                <input name="aux" style={{border:`0.3px solid ${theme[used].sombra}`}} value={aux} onChange={(e)=>setAux([...aux,{[e.target.name]:e.target.value}])} />
                            </div>
                        </div>
                    ))
                }
            </div>
            </>
            }
        </div>
    )
}