import style from "../../styles/index.module.css"
import { Box, Button } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AlertModal from '../modals/alertModal'
import { useState } from "react";
import { CircularProgress } from "@mui/material"
import imgPath from '../../public/uploads/1707726119536-images.jpg'
import {getAllCustomer , deleteCustomer} from '../../store/slices/CustomerAPI'
import { useDispatch,useSelector } from "react-redux";
export default function Table(prop) {


    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [custID, setCustID] = useState("")
    const custdata= useSelector((state) => state.app);
   

    const handleDeleteCustomer = async () => {
        // console.log(`I want to delete this ID `, custID)
        dispatch(deleteCustomer(custID))
        setOpenModal(false)
        setCustID("")
    }



    const handleSorting=(e)=>{
        dispatch(getAllCustomer(`sort=${e}`));
    }


    return (
        <>

            <Box className={style.table}>

                <Box className={style.tableHeaderRow}>

                    <Box
                       
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                        className={style.tableCol}>
                        <span >
                            
                        </span>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                        className={style.tableCol}>
                        <span >
                        username
                        </span>
                        <span onClick={()=>{
                            handleSorting("username")
                        }
                        } style={{ display: "flex", flexDirection: "column" }}>
                            <ArrowDropUpIcon />
                        </span>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                        className={style.tableCol}>
                        <span 
                        
                        >
                        CustomerName
                        </span>
                        <span
                        onClick={()=>{
                            handleSorting("customer")
                        }
                        }
                        style={{ display: "flex", flexDirection: "column" }}>
                            <ArrowDropUpIcon />
                        </span>
                    </Box>
                    <Box
                       
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                        className={style.tableCol}>
                        <span 
                        
                        >
                            email
                        </span>
                        <span
                        onClick={()=>{
                            handleSorting("email")
                        }
                        }
                        style={{ display: "flex", flexDirection: "column" }}>
                            <ArrowDropUpIcon />
                        </span>
                    </Box>
                    <Box
                       
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                        className={style.tableCol}>
                        <span >
                            
                        </span>
                        
                    </Box>





                </Box>

                {/* table body /*  */}
                <Box className={style.tableBody}>
                    {prop.isLoading ?
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: "center"
                            }}>
                            <CircularProgress />
                        </Box>
                        :
                        <>
                            {(prop?.data?.length == 0) ?
                                <Box sx={{ textAlign: "center" }}>
                                    No Data Found
                                </Box>
                                : <>
                                    {prop?.data?.map((item, index) => {
                                        
                                        const imgSrc = require(`../../public/uploads/${item.image}`).default;
                                        
                                        return (

                                            <Box key={index + 1} className={style.tableBodyRow}>
                                                <Box key={index + 2} className={style.tableCol}>
                                                    <img style={{ width: "60px", borderRadius: "10px" }} src={imgSrc.src} />
                                                </Box>
                                                <Box key={index + 3} className={style.tableBodyCol}>
                                                    {item.username}
                                                </Box>
                                                <Box key={index + 4} className={style.tableBodyCol}>
                                                    {item.customer_name}
                                                </Box>
                                                <Box key={index + 5} className={style.tableBodyCol}>
                                                    {item.email}
                                                </Box>
                                                <Box key={index + 6} className={style.tableBodyCol}>
                                                    <Button key={index + 7} sx={{ marginRight: "10px" }} onClick={()=>{
                                                        prop?.handleEditButton(item)
                                                    }} className="successButton">Edit</Button>
                                                    <Button key={index + 8} className="errorButton" onClick={() => {
                                                        setOpenModal(true)
                                                        setCustID(item._id)
                                                    }}>Delete</Button>
                                                </Box>
                                            </Box>
                                        )
                                    })}
                                </>}


                        </>
                    }

                </Box>
                {/* table body end  */}

            </Box>
            <AlertModal open={openModal} setOpenModal={setOpenModal} action={handleDeleteCustomer} />
        </>
    );
}