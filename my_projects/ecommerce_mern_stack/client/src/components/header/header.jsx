import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    header: {

    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>

            </Toolbar>
        </AppBar>
    )
}

export default Header;