import { useState, useEffect } from 'react';
import { Sidebar as ProSidebar, useProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PaymentIcon from '@mui/icons-material/Payment';


function Sidebar() {
    const [selected, setSelected] = useState("Dashboard");
    const { collapseSidebar } = useProSidebar();
  

    useEffect(() => {
        if (window.innerWidth < 400) {
            collapseSidebar();
        }

    }, []);

    function Item({ title, to, icon, selected, setSelected }: any) {
        return (
            <Link to={to}>
                <MenuItem
                    active={selected === title}
                    style={{ color: "white" }}
                    onClick={() => setSelected(title)}
                    icon={icon}
                >
                    <Typography>{title}</Typography>
                </MenuItem>
            </Link>
        );
    }

    return (

        <Box
            flex={1}
            flexDirection={"row"}
        >
            <ProSidebar breakPoint="sm"
                transitionDuration={800}
                backgroundColor="#48099a"
                rtl={false}
                style={{ height: "92vh" }}
            >
                <Menu
                    menuItemStyles={{
                        button: () => {
                            return {
                                ":hover": {
                                    color: "#000000 !important",
                                }
                            };
                        },
                    }}
                >
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        onClick={() => {
                            collapseSidebar();
                        }}
                        rootStyles={{
                            color: "white",
                        }}
                    >
                        <Typography
                            variant="h6"
                        >
                            Bem - vindo
                        </Typography>
                    </MenuItem>

                    <Item
                        icon={<HomeOutlinedIcon />}
                        title="Dashboard"
                        to="/"
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        icon={<PaymentIcon  />}
                        title="Formulario"
                        to="/formulario"
                        selected={selected}
                        setSelected={setSelected}
                    />


                   
                  
                    

                </Menu>
            </ProSidebar>
        </Box >
    )
}

export default (Sidebar);