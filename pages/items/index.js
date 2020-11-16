import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'

import Items from '../../src/containers/items/items'
import NewItemForm from '../../src/containers/new-item-form/new-item-form'

const useStyles = makeStyles(theme => ({
    wrapper: {
        paddingTop: theme.spacing(3)
    }
}))

export default function ItemsPage() {
    const classes = useStyles()
    return (
        <Box
        className={classes.wrapper}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={9}>
                    <Items />
                </Grid>
                <Grid item xs={12} md={3}>
                    <NewItemForm/>
                </Grid>
            </Grid>
        </Box>
    )
}