import { useSelector } from "react-redux";
//import { AiOutlineSave, AiOutlineFileAdd, AiOutlineDelete, AiOutlineDownSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RootState } from "../../context/themes/ThemeStore";
import theme, { IThemeExport } from "../../Themes/colors";

type prop={
    color?:keyof typeof theme.Light,
    nameFile?:string;
}

export  const NavBarReport=({color="primary",nameFile="New File 1"}:prop)=>{

    const stateTheme:IThemeExport=useSelector((state:RootState)=>state.theme)
    const used:keyof typeof stateTheme=stateTheme.used;



    return (
        <header className="navbar flex-h" style={{background:stateTheme[used][color]}}>
            <h3 className="subtitle" style={{color:stateTheme[used].toggleText}}>{nameFile}</h3>
            <nav className="nav">
                <ul className='flex-h'>
                    <li className="link flex-center-h">
                        <Link to='/' style={{color:stateTheme[used].toggleText}}>Inicio</Link>
                    </li>
                    <li className="btn-opt  flex-center-v">
                        {/* {<AiOutlineFileAdd color={stateTheme[used].togleSombra} strokeWidth='2' style={{fontSize:20}} />} */}
                        <p style={{color:stateTheme[used].toggleText}}>Nuevo </p>
                    </li>
                    <li className="btn-opt flex-center-v">
                        {/* {<AiOutlineSave fill={stateTheme[used].togleSombra} style={{fontSize:20}} />} */}
                        <p style={{color:stateTheme[used].toggleText}}>Guardar </p>
                    </li>
                    <li className="btn-opt flex-center-v">
                        {/* {<AiOutlineDelete color={stateTheme[used].togleSombra} strokeWidth='2' style={{fontSize:20}} />} */}
                        <p style={{color:stateTheme[used].toggleText}}>Eliminar </p>
                    </li>
                    <li className="btn-opt flex-center-v">
                        {/* {<AiOutlineDownSquare color={stateTheme[used].togleSombra} strokeWidth='2' style={{fontSize:25}} />} */}
                        <p style={{color:stateTheme[used].toggleText}}>Exportar </p>
                    </li>

                </ul>
            </nav>
        </header>
    )
}