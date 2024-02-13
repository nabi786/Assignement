import style from "../../styles/index.module.css"
import { Box, Button } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AlertModal from '../modals/alertModal'
import { useState } from "react";

import { CircularProgress } from "@mui/material"
import imgPath from '../../public/uploads/1707726119536-images.jpg'

export default function Table(prop) {


    console.log("props are ", prop)
    const [openModal, setOpenModal] = useState(false)


    const [custID, setCustID] = useState("")

 

    const handleDeleteCustomer = async () => {
        // console.log(`I want to delete this ID `, custID)


        setOpenModal(false)
    }


    return (
        <>

            <Box className={style.table}>

                <Box className={style.tableHeaderRow}>
                    {
                        prop.tableHeader?.map((item, index) => {
                            return (
                                <Box
                                    key={index + 3}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer"
                                    }}
                                    className={style.tableCol}>
                                    <span key={index}>
                                        {item.value}
                                    </span>
                                    <span key={index + 1} style={{ display: "flex", flexDirection: "column" }}>
                                        {item.sortable ? <ArrowDropUpIcon /> : ""}
                                        {/* {item.sortable? <ArrowDropDownIcon/> : ""} */}
                                    </span>
                                </Box>
                            )
                        })


                    }
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
                        {([].length == 0) ? 
                        <Box sx={{textAlign : "center"}}>
                            No Data Found
                        </Box>
                        : <>
                                    {prop?.data?.data?.map((item, index) => {

                                        return (

                                            <Box key={index + 1} className={style.tableBodyRow}>
                                                <Box key={index + 2} className={style.tableCol}>
                                                    <img style={{ width: "60px", borderRadius: "10px" }} src={`/_next/static/media/1707726119536-images.2e487737.jpg`} />
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
                                                    <Button key={index + 7} sx={{ marginRight: "10px" }} onClick={prop?.handleEditButton} className="successButton">Edit</Button>
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