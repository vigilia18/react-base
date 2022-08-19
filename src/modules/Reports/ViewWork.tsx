
import React, { createElement, ReactElement, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { IThemeExport } from '../../Themes/colors';
import {s} from "./data/sectores";
import './css/ViewWork.css';
import { Button } from '../Shared/Button';
import { ITools } from '../../Interface/Tools.interface';
import { createRoot } from 'react-dom/client';
import { Tags } from './data/Tags';

type prop={
    tool:ITools|null
}

export const ViewWork=({tool=null}:prop)=>{

    const theme:IThemeExport=useSelector((state:any)=>state.theme);
    const used:keyof typeof theme=theme.used;
    
    const [show,setShow]=useState(true);
    const [usedTool,setUsedTool]=useState({tool:tool,status:false});
    const [child,setChild]=useState([{element:<></>,id:''}]);
    const [history, setHistory] = useState<number>(0);
    const refCont=useRef<null|HTMLDivElement>(null);
    
    const showId=()=>{
        setShow(!show);
    }
    
    useEffect(() => {
        console.log(tool)
        if(tool!=null){
            setUsedTool({tool,status:true});
            return;
        }
    }, [tool])
    
    const setTool=(target:HTMLDivElement)=>{
        
        if(usedTool.tool===null){
            return;
        }
        const id=target.id;
        const tag=usedTool.tool.target
        const value=usedTool.tool.attributes.filter(e=>e.key==="value");
        
        const element=Tags({tag,children:<>{value[0].value?value[0].value:'hola'}</>});
    
        setChild([...child,{element,id:id}]);


        setUsedTool({tool:null,status:false});
    }
    

    return(
        <div className='view-work flex-center-v' style={{background:theme[used].fondo}}>
            <div className="show-ids">
                <Button text={!show?'Mostrar Grid':'Ocultar Grid'} click={showId}/>
            </div>
            <div className="view-cont" style={{background:'white',border:`0.4px solid ${theme[used].sombra}`}}>
                {
                    s.map((e,i)=>(
                        <div className="sectores" ref={refCont} onClick={({target}:any)=>setTool(target)} style={{border:show?`0.2px solid ${usedTool.tool!==null? theme[used].success :theme[used].sombra}`:'none'}} id={e} key={i+Date.now()-89}>
                            {
                              //  refCont.current?.firstChild===null?
                                    child.map((_e,_i)=>(
                                        _e.id===e?_e.element:null
                                    ))
                                    // child.id===e?child.element:
                                // :
                                // null
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}