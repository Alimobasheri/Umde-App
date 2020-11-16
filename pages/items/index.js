import Hidden from '@material-ui/core/Hidden'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Dialog from '@material-ui/core/Dialog'
import {makeStyles} from '@material-ui/core/styles'

import Items from '../../src/containers/items/items'
import NewItemForm from '../../src/containers/new-item-form/new-item-form'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
    wrapper: {
        paddingTop: theme.spacing(3)
    },
    boxes: {
        [theme.breakpoints.down("md")]: {
            margin: `${theme.spacing(5)} 0`,
        }
    },
    addFab: {
        position: "absolute",
        bottom: 10,
        left: 10
    }
}))

export default function ItemsPage() {
    const classes = useStyles()
    const [newItemDialog, setNewItemDialog] = useState(false)
    return (
            <Grid 
            className={classes.wrapper}
            container 
            justify="space-evenly" 
            alignItems="center" 
            spacing={2}>
                <Grid
                className={classes.boxes} item xs={12} md={9}>
                    <Items />
                </Grid>
                <Hidden
                smDown>
                <Grid
                className={classes.boxes} item xs={12} md={3}>
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
                fullscreen
                open={newItemDialog}
                onClose={() => setNewItemDialog(false)}>
                    <NewItemForm />
                </Dialog>
            </Grid>
    )
}