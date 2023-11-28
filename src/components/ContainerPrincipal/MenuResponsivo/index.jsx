import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StyleIcon from '@mui/icons-material/Style';
import { Avatar, Button } from '@mui/material';
import CampoDePesquisa from './CampoDePesquisa';
import Creditos from './Creditos';

const drawerWidth = 240;

function MenuResponsivo(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const styleTitulo = {
        color: '#F9F5F6',
        fontWeight: 'bold',
        fontFamily: 'Adventure',
        width: '280px'

    }

    const drawer = (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '50px',
                    alignItems: 'center',
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#03001C',
                    color: '#F9F5F6',
                    paddingTop: '50px',
                    fontFamily: 'Adventure'
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <div className='flex flex-col items-center'>
                <Avatar sx={{ bgcolor: '#6528F7' }} />
                <span className='text-xl font-bold'>Alessandro</span>
            </div>
            <div>
                <Button sx={{
                    backgroundColor: '#6528F7',
                    width: '200px',
                    '&:hover': {
                        backgroundColor: '#4c00ff',
                    },
                }} variant="contained" startIcon={<StyleIcon />
                }>
                    Cartas
                </Button>
            </div>
        </Drawer>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    height: '150px',
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#6528F7',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Toolbar sx={{ width: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center'  }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ margin: '0px', padding: '0px', display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <Typography sx={styleTitulo} variant="h4" noWrap component="div">
                            Jornada do Herói
                        </Typography>
                        <CampoDePesquisa />
                        <Creditos />
                    </div>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '50px',
                            alignItems: 'center',
                            backgroundColor: '#03001C',
                            color: '#F9F5F6',
                            paddingTop: '50px'
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

MenuResponsivo.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default MenuResponsivo;
