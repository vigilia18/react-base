import { ElementP } from "../../Interface/Elements.interface";

type ToolJSX={tool:string,element:()=>JSX.Element}[];

const Parrafo=($?:ElementP)=>{
    return <p>p</p>
}

const ToolKit:ToolJSX=[
    {
        tool:"Parrafo",
        element:Parrafo
    }
]

export default ToolKit;