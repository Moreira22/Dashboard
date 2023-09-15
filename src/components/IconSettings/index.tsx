// serviços
import { useState } from 'react';

// estilização
import { Box, Popover, Typography, IconButton } from "@mui/material";

// Icones
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const IconSettings = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickEmpresa = () => {
        navigate('../minhaempresa');
    };

    const open = Boolean(anchorEl);
    

    return (
        <Box>
            <IconButton
                type="button"
                sx={{
                    p: 1,
                    color: '#ffffff'
                }}
                onClick={handleClick}
            >
                <SettingsOutlinedIcon />
            </IconButton>
            <Popover
                // id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {/* Configurações da Empresa */}
                <Box
                    display='flex'

                >
                    <IconButton
                        type="button"
                        sx={{
                            width: '100%',
                            justifyContent: 'flex-start',
                            borderRadius: 0,
                            color: '#1A2254'
                        }}
                        onClick={() => { handleClickEmpresa() }}
                    >
                        <PersonOutlinedIcon />
                        <Typography m='0px 20px'>Empresa</Typography>
                    </IconButton>
                </Box>

                {/* Sair da Conta */}
                <Box
                    display='block'
                >
                    <IconButton
                        type="button"
                        sx={{
                            width: '100%',
                            borderRadius: 0,
                            justifyContent: 'flex-start',
                            color: '#1A2254'
                        }}
                        onClick={() => {}}
                    >
                        <LogoutIcon />
                        <Typography m='0px 20px'>Sair</Typography>
                    </IconButton>
                </Box>

            </Popover>
        </Box >
    );
};

export default IconSettings;
