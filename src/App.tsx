import { useState } from 'react';
import {useSelector} from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { RootState } from './context/themes/ThemeStore';
import { ReportPage } from './modules/Reports/ReportPage';

function App() {
  const themeState=useSelector((state:RootState)=>state.theme);
  const [count, setCount] = useState(0)

  return (
    <div style={{height:'100vh',background:themeState[themeState.used].fondo}}>
      <BrowserRouter>
        <Routes location={'/report'}>
            <Route path='/report' element={<ReportPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
