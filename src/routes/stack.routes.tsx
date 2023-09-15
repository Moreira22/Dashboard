import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@mui/material";
import { dashboardTheme } from '../typos';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Topbar from '../pages/Global/Topbar';
import Sidebar from '../pages/Global/Sidebar';
import Dashboard from '../pages/Dashboard';
import Formulario from '../pages/Formulario'; 
import Cadastro from '../pages/Cadastro';
import Editar from '../pages/Editar';

export function StackRoutes(){
    const thema = dashboardTheme;
    return(
        <>
        <ThemeProvider theme={thema}>
            <ProSidebarProvider>
                <Topbar/> 
                <div className='app'>
                    <div>
                         <Sidebar/> 
                    </div>
                    <main className="content" style={{ width: "100%" }}>
                        <div style={{flex: 1}}>
                            <Routes>
                             <Route path="/" element={<Dashboard />}/> 
                             <Route path="/formulario" element={<Formulario/>} />
                             <Route path="/cadastro" element={<Cadastro/>} />
                             <Route path="/editar/:id" element={<Editar/>} />
                            </Routes>
                        </div>
                    </main>
                </div>
            </ProSidebarProvider>
        </ThemeProvider>
        </>
    )
}