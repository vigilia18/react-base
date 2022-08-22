import { useState } from "react"
import { ITools } from "../../Interface/Tools.interface"
import { Editor } from "./Edito"
import { NavBarReport } from "./NavBarReport"
import { Tools } from "./Tools"
import { View } from "./View"
export const ReportPage=()=>{

    const [tool,setTool]=useState<ITools>({attributes:[],id:0,category:'',cssDefault:[],name:'',target:''});
    //const [_tool,_setTool]=useState<ITools>({attributes:[],id:1000,category:'',cssDefault:[],name:'',target:''});

    const [show, setShow] = useState(false)
    const getTool=(_tool:ITools)=>{
        console.log(_tool)
        if(_tool.id!==0){
            setTool(_tool);
            setShow(true);
        }
    }
    const showEditor=(_show:boolean)=>{
        setShow(_show);
    }

    const changeText=(text:string)=>{

    }

    return (
        <div className="grid td12" style={{height:'100vh',gridGap:0}}>
            <NavBarReport/>
            <div className="grid tr12 " style={{height:'90vh',gridGap:5,gridRowStart:2,gridRowEnd:13}}>
                <Tools getTool={getTool}/>
                <View />
            </div>
            <Editor tool={tool}/>
        </div>
    )
}