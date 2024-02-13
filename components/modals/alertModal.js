import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button } from '@mui/material'
import styles from "../../styles/index.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

export default function WarningModal(prop) {
    
    // const [openModal,setModalOpen] = useState(prop.open)
    const handleClose = () => prop.setOpenModal(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: "10px",
        overflow: "hidden",
        padding: "12px"
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={prop.open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}

            >
                <Fade in={prop.open} >
                    <Box sx={style}>


                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            position : "relative",
                            padding : "25px 0px"
                        }}> 
                            <Box sx={{
                               position :"absolute",
                               right : "5px",
                               top: "5px"
                            }}>
                                <CloseIcon
                                sx={{
                                    cursor : "pointer",
                                }}
                                onClick={()=>{prop.setOpenModal(false)}}
                                />
                            </Box>
                            <Box>
                                <DeleteIcon sx={{ fontSize: "80px", color: "red" }} />
                            </Box>
                            <Box sx={{ marginTop: "20px",fontWeight:"bold"}}>
                                Are you sure?
                            </Box>
                            <Box sx={{ textAlign: "center",marginTop: "20px" }}>Do you really want to delete this customer? This Process can not be undone?</Box>
                            <Box sx={{ marginTop: "20px" }}>
                                <Button sx={{ 
                                    marginRight: "20px",
                                    backgroundColor: "#a5a5af",
                            
                                    color : "white",
                                    '&:hover': {
                                        
                                        backgroundColor: "#a5a5af",
                                        
                                      },
                                    }} onClick={()=>{prop.setOpenModal(false)}}>Cancle</Button>
                                <Button color="error" variant="contained"
                                onClick={prop.action}>Delete</Button>
                            </Box>
                        </Box>



                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
