
import {Button} from '@mui/material'
import style from '../styles/index.module.css'
import AddIcon from '@mui/icons-material/Add';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
function Add_Button(prop){


    return(
        <>  
            <Button sx={{
                width : prop.fullWidth==true? "100%" : "auto"
            }} type={prop.name? prop.name : ""} className={style.addButtonStyle} onClick={prop.action}>
                {
                prop.type  == "add"? <AddIcon sx={{marginRight : "15px"}}/> : 
                prop.type  == "edit"? <ModeEditOutlineIcon sx={{marginRight : "15px"}}/> : ""
                } {prop.text}
            </Button>
        </>
    )
}


export default Add_Button