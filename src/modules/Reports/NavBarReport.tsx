import { useSelector } from "react-redux";
import { AiOutlineSave, AiOutlineFileAdd, AiOutlineDelete, AiOutlineDownSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RootState } from "../../context/themes/ThemeStore";
import theme, { IThemeExport } from "../../Themes/colors";
import { useEffect, useRef } from "react";

type prop={
    color?:keyof typeof theme.Light,
    nameFile?:string;
    getHeight:Function;
}

export  const NavBarReport=({color="primary",nameFile="New File 1",getHeight}:prop)=>{

    const stateTheme:IThemeExport=useSelector((state:RootState)=>state.theme)
    const used:keyof typeof stateTheme=stateTheme.used;
    const ref=useRef<HTMLHeadingElement|null>(null);

    useEffect(()=>{
        if(ref.current!==null){
            getHeight(ref.current.clientHeight)
            return;
        }
    },[ref])


    return (
        <header className="navbar flex-h" style={{background:stateTheme[used][color]}} ref={ref}>
            <h3 className="subtitle" style={{color:stateTheme[used].toggleText}}>{nameFile}</h3>
            <nav className="nav">
                <ul className='flex-h'>
                    <li className="link flex-center-h">
                        <Link to='/' style={{color:stateTheme[used].toggleText}}>Inicio</Link>
                    </li>
                    <li className="btn-opt  flex-center-v">
                        <AiOutlineFileAdd color={stateTheme[used].togleSombra} strokeWidth='2' style={{fontSize:20}} />
                        <p style={{boxShadow:`1px 1px 6px ${stateTheme[used].text}`,color:stateTheme[used].text,background:stateTheme[used].fondo}}>Nuevo Reporte</p>
                    </li>
                    <li className="btn-opt flex-center-v">
                        <AiOutlineSave fill={stateTheme[used].togleSombra} style={{fontSize:20}} />
                        <p style={{boxShadow:`1px 1px 6px ${stateTheme[used].text}`,color:stateTheme[used].text,background:stateTheme[used].fondo}}>Guardar Reporte</p>
                    </li>
                    <li className="btn-opt flex-center-v">
                        <AiOutlineDelete color={stateTheme[used].togleSombra} strokeWidth='2' style={{fontSize:20}} />
                        <p style={{boxShadow:`1px 1px 6px ${stateTheme[used].text}`,color:stateTheme[used].text,background:stateTheme[used].fondo}}>Eliminar Reporte</p>
                    </li>
                    <li className="btn-opt flex-center-v">
                        <AiOutlineDownSquare color={stateTheme[used].togleSombra} strokeWidth='2' style={{fontSize:25}} />
                        <p style={{boxShadow:`1px 1px 6px ${stateTheme[used].text}`,color:stateTheme[used].text,background:stateTheme[used].fondo}}>Exportar Reporte</p>
                    </li>

                </ul>
            </nav>
        </header>
    )
}