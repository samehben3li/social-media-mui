import { AppBar, Toolbar, styled, Typography, Box, InputBase, Avatar } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    gap: "10px"
})

const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding: "0 10px",
    borderRaduis: theme.shape.borderRadius,
    width: "55%",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        width: "40%",
    }
}))

const IconsContainer = styled(Box)(({theme})=>({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const MenuIconContainer = styled(Box)(({theme})=>({
    display: "flex",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Navbar = () => {

    const [open,setOpen] = useState(false)

  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h6" sx={{display: {xs: "none",sm: "block"}}} >TheKnower feed</Typography>
            <HomeIcon sx={{display: {xs: "block",sm: "none"}}}/>
            <Search>
                <InputBase placeholder="search ..." sx={{width: "100%"}}/>
                <SearchIcon color="primary" />
            </Search>
            <IconsContainer>
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon />
                </Badge>
                <Avatar sx={{width: 30,height: 30}} src="/assets/img/default-avatar.jpg" onClick={()=>setOpen(true)} />
            </IconsContainer>
            <MenuIconContainer>
                <MenuIcon />
            </MenuIconContainer>
        </StyledToolbar>
        <Menu
            /* id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button" */
            open={open}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            onClose={()=>setOpen(false)}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar
