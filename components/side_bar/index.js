import { Box, Typography } from '@mui/material'
import style from "@/styles/side.module.css"
import logo from '../../public/2.png'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const SideBar = (prop) => {
    
    return (
        <>
            <Box onClick={()=>{prop.setSideValue(false)}}
                sx={{
                display : (prop.sideOpen==true)? "block !important" : "none", 
                }}
                className={style.blackBox}>
            </Box>
            <Box
            sx={{
                left : (prop.sideOpen==true)? "0px !important" : "-100% !important",
            }}
            className={style.sideBarBox}>
                {/* logo  */}
                <img src={logo.src} style={{ width: "70%", display: "block ", margin: "auto", marginTop: "10px" }} />
                {/* menu baar */}

                <ul className={style.menuBar}>
                    <li>
                        <PeopleAltOutlinedIcon />
                        <span style={{ marginLeft: "15px" }}>CUSTOMERS</span>
                    </li>
                    <li>
                        <PeopleAltOutlinedIcon />
                        <span style={{ marginLeft: "15px" }}>CUSTOMERS2</span>
                    </li>
                    <li>
                        <PeopleAltOutlinedIcon />
                        <span style={{ marginLeft: "15px" }}>CUSTOMERS1</span>
                    </li>
                </ul>
            </Box>
        </>
    )
}


export default SideBar;