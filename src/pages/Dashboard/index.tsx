import { Box } from "@mui/material";
import Header from "../../components/Header";
import React from "react";

function Dashboard() {

    const [urlSrc, setUrlSrc] = React.useState("");

    React.useEffect(() => {

    }, []);


    return (
        <>
            <Header title="Dashboard" subtitle="Página Inicial" />
            <Box display="flex" justifyContent="center">
                
            </Box>

        </>
    )
}

export default Dashboard