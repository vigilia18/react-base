import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {AiOutlinePlus,AiOutlineMinus, AiFillUpCircle, AiFillDownCircle, AiFillLeftCircle, AiFillRightCircle, AiFillRest} from "react-icons/ai";
import { IThemeExport } from "../../Themes/colors";
import { Button } from "../Shared/Button";
import { Initial } from "../Templates/Initial";
import { IReport } from "../../Interface/Report.interface";
import { ITools } from "../../Interface/Tools.interface";

// type props={
//    // tool:ITools;
//     showEditor:Function;
// }

export const View = (/*{showEditor}:props*/) => {

    const theme:IThemeExport=useSelector((state:any)=>state.theme)
    const used:keyof typeof theme=theme.used;

    const [width, setWidth] = useState({
            x:215.9,//21.59,
            y:270.0
        });
    const [scale, setScale] = useState({x:1,y:1});
    const [move, setMove] = useState({x:0,y:0,status:false});
    const [dir, setDir] = useState({x:0,y:0})
    //const [_tool,setTool]=useState(tool);

    const reportInfo:IReport={
        nameTemplate: "Doct test",
        infoCompanty: {
            companyName: "Vigilia xyz",
            dir: "Villa grande 1 manzana N lote Dos",
            phone:{
                number:3217217026,
                prefix:"+57"
            },
            fax:"0000229372",
            email: "foliaco818@gamil.com",
            owner: "Miguel Angel Foliaco Gomez"
        },
        typeReport: {
            idTypeReport: 1,
            name: "Factura Text"
        },
        managerCount: false
    }

    document.addEventListener('mousemove',(e)=>{
        setDir({x:e.clientX,y:e.clientY})
    })

    //? method of control
    const scaleDoc=(type:'+'|'-')=>{
        switch(type){
            case'+':
                if(scale.x>6){
                    return;
                }
                setScale({x:scale.x+0.05,y:scale.y+0.05});
                return
            case '-':{

                if(scale.x<0){
                    return;
                }
                setScale({x:scale.x-0.05,y:scale.y-0.05});
                return
            }
        }
    }

    const moveDoc=(e:any)=>{
        //setMove({...move,status:!move.status});
        //console.log('click',move.status)
    }

    //useEffect(()=>{
    //    //if(tool.id!==0){
    //      //  setTool(tool);
    //     //   showEditor(true);
    //   // }
    //},[tool])


    const addElement=()=>{
        const view=document.getElementById('view');
        if(view===null) return;
        view.style.borderColor='red';
        view.innerHTML=`<p>hola</p>`
    }

    // useEffect(()=>{

    //     document.addEventListener('mousemove',(e:any)=>{
    //     if(move.status===true){
    //         //console.log(move)
    //         //setMove({...move,x:e.screenX-width.x,y:e.clientY-100})
    //         //console.log(e)
    //     }
    //     })
    // },[move])

    const moveByControl=(control:'left'|'right'|'top'|'bottom'|'center')=>{
        //console.log(move)
        switch(control){
            case 'left':
                setMove({...move,x:move.x-50});
                return
            case 'right':
                setMove({...move,x:move.x+50});
                return
            case 'top':
                setMove({...move,y:move.y-50});
                return
            case 'bottom':
                setMove({...move,y:move.y+50});
                return
            case "center":
                setMove({...move,x:-347,y:-325});
                return;
        }
    }



    return (
        <div className="cont-view" style={{background:theme[used].subFondo}}>
            <div className="buttons" style={{border:'0.3px solid '+theme[used].sombra}}>
                <Button text="" click={()=>scaleDoc("+")}><AiOutlinePlus fill={theme[used].toggleText}/></Button>
                <Button text="" click={()=>scaleDoc("-")}><AiOutlineMinus fill={theme[used].toggleText}/></Button>
            </div>
            <div className="buttons" style={{border:'0.3px solid '+theme[used].sombra, width:200,top:200}}>
                <Button text="" click={()=>moveByControl("top")}><AiFillUpCircle fill={theme[used].toggleText}/></Button>
                <Button text="" click={()=>moveByControl("bottom")}><AiFillDownCircle fill={theme[used].toggleText}/></Button>
                <Button text="" click={()=>moveByControl("left")}><AiFillLeftCircle fill={theme[used].toggleText}/></Button>
                <Button text="" click={()=>moveByControl("right")}><AiFillRightCircle fill={theme[used].toggleText}/></Button>
                <Button text="" click={()=>moveByControl("center")}><AiFillRest fill={theme[used].toggleText}/></Button>

            </div>
            <div className="view" id="view" onDoubleClick={(e)=>moveDoc(e)}  style={{left:move.x+'px',top:move.y+'px',width:width.x+'px',height:width.y+'px',transform:`scale(${scale.x})`,position:'relative',background:theme[used].fondo,border:'0.3px solid '+theme[used].sombra}}>

            </div>
        </div>
    )
}