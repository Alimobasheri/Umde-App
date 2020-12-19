import Hidden from '@material-ui/core/Hidden'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import {makeStyles} from '@material-ui/core/styles'

import CloseIcon from '@material-ui/icons/Close'

import Items from '../../src/containers/items/items'
import NewItemForm from '../../src/containers/new-item-form/new-item-form'
import { useState } from 'react'
import { Button, IconButton } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    wrapper: {
        paddingTop: theme.spacing(1),
    },
    boxes: {
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
        [theme.breakpoints.down("md")]: {
            margin: `${theme.spacing(5)} 0`,
        }
    },
    addFab: {
        position: "fixed",
        bottom: 10,
        left: 10
    },
    newItemDialog: {
        height: "100vh",
        minHeight: '100vh',
        maxHeight: "100vh",
        overflowY: "scroll",
        '& .MuiAppBar-root': {
            position: "relative",
            padding: theme.spacing(1),
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center"
        }
    }
}))

export default function ItemsPage() {
    const classes = useStyles()
    const [newItemDialog, setNewItemDialog] = useState(false)
    return (
            <Grid 
            className={classes.wrapper}
            container
            direction="row" 
            justify="space-evenly" 
            alignItems="stretch" >
                <Grid
                className={classes.boxes} item xs={12} md={8}>
                    <Items />
                </Grid>
                <Hidden
                smDown>
                <Grid
                className={classes.boxes} item xs={12} md={4}>
                    <NewItemForm/>
                </Grid>
                </Hidden>
                <Hidden
                smUp>
                    <Fab
                    className={classes.addFab}
                    size="medium"
                    color="primary"
                    aria-label="افزودن کالا"
                    onClick={() => setNewItemDialog(true)}>
                        <AddIcon />
                    </Fab>
                </Hidden>
                <Dialog 
                fullScreen
                className={classes.newItemDialog}
                open={newItemDialog}
                onClose={() => setNewItemDialog(false)}>
                    <AppBar
                    className={classes.newItemDialogAppBar}>
                        <IconButton color={"secondary"} onClick={() => setNewItemDialog(false)}>
                            <CloseIcon />
                        </IconButton>
                    </AppBar>
                    <NewItemForm />
                </Dialog>
            </Grid>
    )
}