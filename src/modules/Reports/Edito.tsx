import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ITools } from "../../Interface/Tools.interface";
import { IThemeExport } from "../../Themes/colors";
import { Button } from "../Shared/Button";
import './css/Editor.css';

type props={
    tool:ITools;
}
export const Editor=({tool}:props)=>{

    const [text, setText] = useState(``);
    const [_tool,setTool]= useState(tool);
    const [pos, setPos] = useState({x:0,y:0,status:false});
    const [hidden,setHidden]=useState(false)
    const theme:IThemeExport=useSelector((state:any)=>state.theme)
    const used:keyof typeof theme=theme.used;

console.log(pos.y*-1)
    const editTool=()=>{
        alert(`soy un ${tool.name}`)
    }
    
    useEffect(()=>{
        if(tool.id!==0){
            setTool(tool);
            editTool();
            setHidden(true);
        }
    },[tool])


    const onMove=()=>{
        if(pos.status){
            setPos({...pos,status:false});
            return
        }
        setPos({...pos,status:true});
        console.log(pos.status)
    }
    
    document.addEventListener('mousemove',(e)=>{
        setPos({...pos,x:e.clientX-20,y:e.clientY-20});
        return;
    })


    return (
        <div className="editor-cont" style={{border:`0.3px solid ${theme[used].sombra}`,bottom:pos.status?(pos.y-window.screenY-370)*-1:0,right:pos.status?(pos.x-window.screenX-600)*-1:0,display:hidden?'block':'none'}}>
            <div onClick={()=>setPos({...pos,status:!pos.status})}>move</div>
            <div className="editor-sup">
                <h3>Element</h3>
            </div>
            <div className="editor-body" style={{border:`0.3px solid ${theme[used].sombra}`}}>
                <textarea name="body" value={text} onInput={(e:any)=>setText(e.target.value)} className="editor"></textarea>
            </div>
            <div className="editor-buttons grid tr4">
            <Button text="Guardar"/>
            <Button text="Duplicar"/>
            <Button text="Eliminar"/>
            <Button text="Styles"/>
            </div>
        </div>
    )
}