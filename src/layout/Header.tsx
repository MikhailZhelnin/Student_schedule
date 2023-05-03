import {useState} from "react";
import {Link} from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import MobileMenu from "../components/MobileMenu";

import {menuItems} from "../data";
import {icons} from "../assets/icons/icons";

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 24px'
  },
  nav: {
    display: {xs: 'none', sm: 'block'},
  },
  navItem: {
    color: '#ffffff',
  },
  burgerIcon: {
    display: {sm: 'none'}
  },
  burgerIconIcon: {
    color: 'white'
  }
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box>
      <AppBar component="nav" elevation={0}>
        <Toolbar sx={styles.toolbar}>
          <img src={icons.logo} alt='Logo'/>
          <Box sx={styles.nav}>
            {menuItems.map((item) => (
              <Button component={Link} to={item.link} key={item.id} sx={styles.navItem}>
                {item.text}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={styles.burgerIcon}
          >
            <MenuIcon sx={styles.burgerIconIcon}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <MobileMenu mobileOpen={mobileOpen} handleMobileToggle={() => setMobileOpen(!mobileOpen)}/>
    </Box>
  )
}

export default Header;