import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/typography'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '90vw',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        '& .MuiButton-root': {
            marginTop: theme.spacing(1)
        },
        '& .MuiTextField-root': {
            display: "block"
        }
    },
    formWrapper: {
        padding: theme.spacing(2)
    }
}))

export default function NewItemForm ({
    newItem,
    onAddNewItem,
    onUpdateNewItem,
    onResetNewItem,
    onDisplayNewItemForm
}) {
    const classes = useStyles()

    const onItemSubmit = (event) => {
        event.preventDefault()
        onAddNewItem()
        onResetNewItem()
    }

    const handleInputChange = (event) => {
        onUpdateNewItem(event.target.name, event.target.value)
    }

    const resetForm = (event) => {
        event.preventDefault()
        onResetNewItem()
    }

    return (
        <Grid component={Paper} className={classes.root} container justify="center" alignItems="center" spacing={3}>
            <Typography
            variant="h5"
            component="h2">
                افزودن کالای جدید
            </Typography>
            <form 
            onSubmit={onItemSubmit}>
                <Grid
                className={classes.formWrapper} item xs={12}>
                <TextField
                required
                label="نام کالا"
                name="name"
                type="text"
                value={newItem.name}
                onChange={handleInputChange} />
                <TextField
                label="گروه کالا"
                type="text"
                name="group"
                value={newItem.group}
                onChange={handleInputChange} />
                <TextField
                label="موجودی در انبار"
                type="number"
                name="remAmount"
                value={newItem.remAmount}
                onChange={handleInputChange} />
                <TextField
                label="قیمت خرید"
                type="number"
                name="buyPrice"
                value={newItem.buyPrice}
                onChange={handleInputChange} />
                <TextField
                label="قیمت فروش"
                type="number"
                name="sellPrice"
                value={newItem.sellPrice}
                onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} md={6} padding={2}>
                <Button
                variant="contained"
                color="primary"
                type="submit">
                    تایید
                </Button>
                </Grid>
                <Grid item xs={12} md={6} padding={2}>
                <Button
                variant="outlined"
                color="primary"
                onClick={resetForm}>
                    بازنشانی همه
                </Button>
                </Grid>
            </form>
        </Grid>
    )
}