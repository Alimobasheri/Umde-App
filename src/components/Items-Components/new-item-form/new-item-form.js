import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    formWrapperRoot: {
        '& .MuiButton-root': {
            marginTop: theme.spacing(1)
        },
        '& .MuiTextField-root': {
            display: "block"
        }
    },
    formWrapper: {
        padding: theme.spacing(2),
        width: '100%',
        '& .MuiInputLabel-root': {
            width: '100%'
        },
        '& .MuiInputBase-root': {
            width: '100%'
        },
        '& .MuiInputBase-input': {
            width: '100%'
        }
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
        <Box
        className={classes.root}
        component={Paper}>
            <Typography
            variant="h5"
            component="h2">
                افزودن کالای جدید
            </Typography>
            <form 
            onSubmit={onItemSubmit}>
                <Grid  
                className={classes.formWrapperRoot} 
                container
                direction="column"
                justify="center"
                alignItems="center">
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
                        label="واحد عمده"
                        type="text"
                        name="wholeUnit"
                        value={newItem.wholeUnit}
                        onChange={handleInputChange} />
                        <TextField
                        label="موجودی به واحد عمده در انبار"
                        type="number"
                        name="wholeRemAmount"
                        value={newItem.wholeRemAmount}
                        onChange={handleInputChange} />
                        <TextField
                        label="تعداد خرده ی موجود در واحد عمده"
                        type="number"
                        name="retialUnitRemInWholeUnit"
                        value={newItem.retialUnitRemInWholeUnit}
                        onChange={handleInputChange} />
                        <TextField
                        label="واحد خرده"
                        type="text"
                        name="retialUnit"
                        value={newItem.retialUnit}
                        onChange={handleInputChange} />
                        <TextField
                        label="موجودی به واحد خرده در انبار"
                        type="number"
                        name="retailUnitRemAmount"
                        value={newItem.retailUnitRemAmount}
                        onChange={handleInputChange} />
                        <TextField
                        label="قیمت خرید"
                        type="number"
                        name="buyPrice"
                        value={newItem.buyPrice}
                        onChange={handleInputChange} />
                        <TextField
                        label="قیمت فروش نقدی"
                        type="number"
                        name="cashSellPrice"
                        value={newItem.cashSellPrice}
                        onChange={handleInputChange} />
                        <TextField
                        label="قیمت فروش چکی"
                        type="number"
                        name="chequeSellPrice"
                        value={newItem.chequeSellPrice}
                        onChange={handleInputChange} />
                        <TextField
                        label="قیمت فروش نسیه"
                        type="number"
                        name="loanSellPrice"
                        value={newItem.loanSellPrice}
                        onChange={handleInputChange} />
                        <TextField
                        label="قیمت فروش ویژه"
                        type="number"
                        name="vipSellPrice"
                        value={newItem.vipSellPrice}
                        onChange={handleInputChange} />
                        <TextField
                        label="قیمت مصرف کننده"
                        type="number"
                        name="costumerPrice"
                        value={newItem.costumerPrice}
                        onChange={handleInputChange} />
                        <TextField
                        label="فروشنده"
                        type="text"
                        name="seller"
                        value={newItem.seller}
                        onChange={handleInputChange} />
                        <TextField
                        label="شرکت"
                        type="text"
                        name="company"
                        value={newItem.company}
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
                    <Grid item xs={12} md={6}>
                        <Button
                        variant="outlined"
                        color="primary"
                        onClick={resetForm}>
                            بازنشانی همه
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}