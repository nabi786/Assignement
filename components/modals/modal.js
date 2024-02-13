import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button } from '@mui/material'
import styles from "../../styles/index.module.css"
import CloseIcon from '@mui/icons-material/Close';
import AddCustomerForm from '@/components/forms/addCustomer'



export default function TransitionsModal(prop) {
    const handleClose = () => {
        prop.setModalOpen(false);
        
    }
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


                        <Box className={styles.modalHeader}>
                            <Button onClick={() => { prop.setModalOpen(false) }} sx={{ color: "white", display: "block", marginLeft: "auto" }}>
                                <CloseIcon />
                            </Button>
                            <h2 sx={{ textAlign: "center" }}>
                                {prop.isEditForm==true? "Edit Customers": "Add New Customers"}
                            </h2>
                        </Box>

                        <Box className={styles.modalContent}>
                            {/* form is here */}
                            <AddCustomerForm editCustomer={prop.editCustomer} isEditForm={prop.isEditForm}  setModalOpen={prop.setModalOpen}  buttonValue={prop.isEditForm==true? "Edit Customers": "Add Customers"}/>
                            {/* form end here */}
                        </Box>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
