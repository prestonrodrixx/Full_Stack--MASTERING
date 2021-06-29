import React from 'react';
import { AppBar, Grid, Toolbar, Typography, InputBase, IconButton, Badge } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export default function Header() {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                       <Grid item sm ={4} style={{border:'1px solid #fff'}}>
                        <InputBase />
                        </Grid> 
                       <Grid item sm ={8} style={{border:'1px solid #000'}}>
                       <IconButton>
                           <Badge badgeContent={4} color="secondary">
                               <NotificationsNoneIcon />
                           </Badge>
                       </IconButton>
                        </Grid> 
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}
