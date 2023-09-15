// estilização
import Header from "../../components/Header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// services
import useMediaQuery from "@mui/material/useMediaQuery";


// Imagens
import SendIcon from '@mui/icons-material/Send';
import UploadFileIcon from "@mui/icons-material/UploadFile";

// formulario
import { useForm, Controller } from 'react-hook-form';

// navegação
import { useNavigate, useParams } from 'react-router-dom';

import React from "react";

//types
import {Data} from '../../types/authentication';





function Editar() {
    //Se passar desse tamanho, é considerado não-mobile
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const navigate = useNavigate();

    
 
    const { control, handleSubmit: onSubmit, formState: { errors }, setValue  } = useForm();

    const [produto, setProduto] = React.useState<Data>();
    const [data, setData] = React.useState();

    const [imagens, setImagens] = React.useState();
    const { id } = useParams();

    const handleImagesChange = (event: any) => {
        setImagens(event.target.files);
    }

    const handleSubmit = (values: any) => {

        // const ediProduto = '/produtos/' + produto?.id;

        // api.put(ediProduto, values, {
        //     validateStatus: status => {
        //         return status < 405;
        //     },
        // }
        // ).then(() => {
        //     console.log(values.descri + " editado com sucesso");
        //     navigate('../produtos');
        // })
        // console.log("submit");
        navigate("/formulario");
    }

    React.useEffect(() => {
        if (produto) {
          Object.keys(produto).forEach((key) => {
            setValue(key as keyof Data, produto[key as keyof Data]);
          });
        }
      },[produto, setValue]);

    // React.useEffect(() => {
    //     const getAuth = '/produto/' + id;

    //     changeLoader(true);

    //     api.get(getAuth, {
    //         validateStatus: status => {
    //             return status < 405;
    //         }
    //     }).then(({ data }) => {
    //         if (data.status === 404) {
    //             console.log('listaItem:' + data.message);

    //         } else {
    //             console.log(data);
    //             setProduto(data);
    //         //  get imagigem
    //         //  const getImgen = ENV.BASEURL + '/imagem/' + data?.id_empresa;
    //         //  fetch(getImagen).then(response => {
    //         //        return response.blob();
    //         //     }
    //         //      }).then(data =>
    //         //      {
    //         //      if(data.erro){
    //         //     alert("Error");
    //         //     return;
    //         //      }
    //         //     const imgURL = URL.createObjectURL(data);
    //         //     setData(imgURL);
    //         //     console.log(imgURL);
    //         // })
    //         }
    //         changeLoader(false);

            

    //         // api.get(postImgen, {
    //         //     validateStatus: status => {
    //         //         return status < 405;
    //         //     }
    //         // }).then(({data}) => {
    //         //     if (data.status === 404) {
    //         //         console.log('listaItem:' + data.message);
    //         //     }else {
    //         //         return data.blob();
    //         //     }
    //         // }).then(({result}) =>{
    //         //     const imgURL = URL.createObjectURL(result);
    //         //      setData(imgURL);
    //         //     console.log(imgURL);
    //         //     const img = ` "${imgURL}"`;
    //         // })
    //     });
    // }, []);
   


    interface PropsProduto {
        name: string,
        label: string,
        type?: string,
    }

    function InputEmpresa({ name, label, type }: PropsProduto) {
        return (
            <Box
                alignItems="center"
                m="40px 10px 0px 10px"
                sx={{ gridColumn: "span 2" }}
            >

                {/* Nome Fantasia */}
                <Controller
                    control={control}
                    name={name}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            fullWidth
                            focused
                            type={type || "text"}
                            onChange={onChange}
                            value={value}
                            label={label}
                            error={!!errors[name]} // verifica se há um erro para o campo atual
                            helperText={errors[name]?.message?.toString()} // exibe a mensagem de erro para o campo atual
                            InputProps={{
                                style: {
                                    color: 'black',
                                }
                            }}
                        />
                    )} />

            </Box>
        )
    }

    return (
        <>
            <Box
                display="flex"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: '#ffffff',
                    width: '65vw'
                }}
            >

                <form onSubmit={onSubmit(handleSubmit)}>
                    <Box
                        sx={{
                            justifyContent: "flex-start",
                            width: '40%',
                        }}
                    >

                        <Header
                            title="Editar"
                            subtitle="Editar"
                        />
                    </Box>

                    <Box
                        display="grid"
                        gap="1px"
                        alignContent="center"
                        // gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        gridTemplateColumns="repeat(4, minmax(0, 50vw))"
                        sx={{ maxWidth: "50vw", "& > div": { gridColumn: isNonMobile ? undefined : "span 2" } }}
                    >
                        <InputEmpresa
                            name="codigo_produto"
                            label="Codigo do produto"

                        />

                        <InputEmpresa
                            name="descricao"
                            label="Descrição"
                        />

                        <InputEmpresa
                            name="referencia"
                            label="Referencia"
                        />

                        <InputEmpresa
                            name="marca"
                            label="Marca"
                        />
                        <Box
                            width='50vw'
                        >
                            <InputEmpresa
                                name="estoque"
                                label="Estoque"
                                type="number"
                            />
                        </Box>
                    </Box>
                    <Box
                        alignItems="center"
                        alignContent="center"
                        textAlign="center"
                        justifyContent="center"
                        ml="9px"
                        mt="25px"
                        width="96%"
                        border={2}
                        borderRadius={3}
                        sx={{ color: 'primary.main', borderColor: 'primary.main' }}
                    >

                        <Box
                            textAlign="center"
                            ml="150px"
                            mr="100px"
                            mt="25px"
                            sx={{ color: "white" }}>

                            {/* <UploadFileIcon
                                sx={{ fontSize: 45, color: "black" }} /> */}
                                  <Box>
                                    {
                                        imagens ? <Box component="img"src={ imagens ? imagens : " " }/> : <UploadFileIcon sx={{ fontSize: 45, color: "black" }} />
                                    }
                                </Box>
                            Escolher imagens
                        </Box>
                        {/* <Box
                                component="img"
                                src={data ? data : ""}
                            /> */}
                        <Box
                            mt="25px"
                            ml="100px"
                            mb="25px"
                        >
                            <input
                                type="file"
                                multiple
                                onChange={handleImagesChange}
                                accept="image/*"
                            />
                        </Box>

                    </Box>

                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={() => onsubmit}
                        sx={{
                            width: "50%",
                            margin: "5% 25%"
                        }}
                    >
                        Editar
                    </Button>

                </form>
            </Box>
        </>

    )
}

export default Editar