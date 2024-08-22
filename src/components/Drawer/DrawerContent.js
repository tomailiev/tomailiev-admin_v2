import { Divider, IconButton, Toolbar } from "@mui/material";
// import ExpandableLI from "./ExpandableLI";
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import MenuContext from "../../context/MenuContext";
// import StorageIcon from '@mui/icons-material/Storage';


const DrawerContent = () => {

    const { setMobileOpen } = useContext(MenuContext);

    return (
        <>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                <NavLink to={'/'}>
                    <IconButton onClick={() => setMobileOpen(false)}>
                        <HomeIcon fontSize="large" />
                    </IconButton>
                </NavLink>
            </Toolbar>
            <Divider />
            <Divider />
        </>
    );
};

export default DrawerContent;