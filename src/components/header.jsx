import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

class Header extends Component {

    render() {
        const { classes, handleDrawerToggle } = this.props;
        return (
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.navIconHide}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap>
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }

}

export default Header;
