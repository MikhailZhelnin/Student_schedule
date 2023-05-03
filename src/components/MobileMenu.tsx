import {Box, Button, Divider, Drawer, Typography} from "@mui/material";
import {menuItems} from "../data";
import {Link} from "react-router-dom";

interface MobileMenuProps {
  mobileOpen: boolean,
  handleMobileToggle(): void
}

const MobileMenu = ({mobileOpen, handleMobileToggle}: MobileMenuProps) => {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleMobileToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {xs: 'block', sm: 'none'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box'},
        }}
      >
        <Box onClick={handleMobileToggle} sx={{textAlign: 'center'}}>
          <Typography variant="h6" sx={{my: 2}}>
            MUI
          </Typography>
          <Divider/>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            {menuItems.map((item) => (
              <Button component={Link} to={item.link} key={item.id}>
                {item.text}
              </Button>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}

export default MobileMenu;