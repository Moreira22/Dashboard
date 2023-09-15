// services

import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import React from "react";

// types e contextos 
import { useNavigate, Navigate } from 'react-router-dom';
// import { companyData, userData } from "../../types/authentication";

// estilização
import AddIcon from '@mui/icons-material/Add';
import { colorTokens } from '../../colors'
import Header from "../../components/Header";
import { Box, Typography, Button, IconButton } from '@mui/material';
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export function Formulario() {

    const [dados, setDados] = useState([]);

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [idDelete, setIdDelete] = useState("");
    const [refreshing, setRefreshing] = useState(false);

    const colors = colorTokens();

    const handleClick = useCallback(
        (params: GridCellParams) => () => {
            console.log("ID:", params.id);
            setIdDelete(String(params.id));
        }, []
    )

    useEffect(() => {
        idDelete ? setOpen(!open) : null;
    }, [idDelete]);

    const handleClose = () => {
        console.log("Close");
        setOpen(false);
        setIdDelete("");
    };

    const handleDelete = ((id?: string) => {
        // const getDelete = '/produto/' + id;
        // api.delete(getDelete).then(({ data }) => {
        //     console.log("then", data.request);
        //     handleClose();
            
        //     setRefreshing(true);
        // });

    });

    const handleEdit = useCallback(
        (params: GridCellParams) => () => {
            console.log("ID: " + params.id);
            navigate('/editar/' + params.id);
        }, []

    );

    useEffect(() => {

        // para fazer a request
    }, [refreshing, Navigate]);

    const columns = [
        {
            field: "codigo_produto",
            headerName: "Codigo do Produto",
            flex: 1,
        },
        {
            field: "referencia",
            headerName: "Referencia",
            flex: 1,
        },
        {
            field: "marca",
            headerName: "Marca",
            flex: 1,
        },
        {
            field: "estoque",
            headerName: "Estoque",
            flex: 2,
        },
        {
            field: "buttons",
            headerName: "Ações",
            flex: 1,
            renderCell: (params: GridCellParams<any, any, any>) => {

                return (
                    <Box m="0px">
                        <IconButton
                            type="button"
                            onClick={handleEdit(params)}
                        >
                            <EditIcon />
                        </IconButton>

                        <IconButton
                            type="button"
                            onClick={handleClick(params)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                )
            },
        },
    ]

    const getRowClassName = (params: any) => {
        const isInactive = !params.row.ativo;
        return isInactive ? "inactive-row" : "";
    };

    return (
        <>

            <Box
                flex={1}
                flexDirection={"column"}
                m="20px"
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <Header title="Tela de Visualização" subtitle="Tela" />
                    <Link to={"/cadastro"}>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                        >
                            <Typography
                                color="white"
                            >
                                Cadastro
                            </Typography>

                        </Button>
                    </Link>


                </Box>
                <Box
                    flex={1}
                    justifyContent="center"
                    alignItems="center"
                    m="40px 0px 0px 0px"
                    height="75vh"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                        },
                        "& .name-column--cell": {
                            color: colors.greenAccent[300],
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: "#82c8f5",
                            borderBottom: "none",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: colors.primary[400],
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: "#82c8f5",
                        },
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                    }}
                >
                    <DataGrid rows={dados} columns={columns} />
                </Box>

            </Box>
        </>
    )
}

export default Formulario;