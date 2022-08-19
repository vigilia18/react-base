import { useState } from "react"
import { ITools } from "../../Interface/Tools.interface"
import { NavBarReport } from "./NavBarReport"
import { Propertys } from "./Propertys"
import { Tools } from "./Tools"
import { ViewWork } from "./ViewWork"

export const ReportPage=()=>{

    const [h, setH] = useState(0)
    const [tool,setTool]=useState<ITools|null>(null);
    const getHeight=(_h:number)=>{
        setH(_h)
    }
    const getTool=(tool:ITools)=>{
        setTool(tool);
    }

    return (
        <>
            <NavBarReport getHeight={(n:number)=>getHeight(n)}/>
            <div className="grid tr12 td12" style={{gridGap:5}}>
                <Tools getTool={getTool} h={h}/>
                <ViewWork tool={tool}/>
                <Propertys tool={tool}/>
            </div>
        </>
    )
}