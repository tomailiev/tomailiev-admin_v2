import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore, Folder, FolderOpen } from "@mui/icons-material";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuContext from "../../context/MenuContext";
import UserContext from "../../context/UserContext";

const ExpandableLI = ({ menuTitle, subMenu, icon }) => {

    const { currentUser } = useContext(UserContext);
    const { setMobileOpen } = useContext(MenuContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <ListItemButton onClick={handleClick} disabled={!currentUser}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={menuTitle} />
                {menuOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={menuOpen && !!currentUser} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {subMenu.map(({ title, path, iconActive, iconInactive }) => (
                        <NavLink key={title} to={path} >
                            {({ isActive, }) => {
                                const icon = isActive ? iconActive || <FolderOpen /> : iconInactive || <Folder />;
                                return <ListItemButton sx={{ pl: 4 }} onClick={() => setMobileOpen(false)}>
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={title} />
                                </ListItemButton>
                            }}
                        </NavLink>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default ExpandableLI;