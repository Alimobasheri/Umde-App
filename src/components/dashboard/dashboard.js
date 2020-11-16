import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    itemsCountCard: {
        padding: theme.spacing(2),
        textAlign: "center"
    }
}))

export default function Dashboard({itemsCount}) {
    const classes = useStyles()
    return (
        <Grid
        className={classes.root}
        container
        justify="space-evenly"
        alignItems="center">
            <Card
            className={classes.itemsCountCard}>
                <CardContent>
                    <Typography variant="h1" component="h2">
                        {itemsCount}
                    </Typography>
                    <Typography variant="h6">
                        مجموع اقلام انبار
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}