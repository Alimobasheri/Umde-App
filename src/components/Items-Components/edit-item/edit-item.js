import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Box, InputAdornment, MenuItem, Select } from '@material-ui/core'
import { useEffect } from 'react'
import {useRouter} from 'next/router'

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

export default function ItemEditionBase ({
    itemId,
    onSetEditingItem,
    onUnsetEditingItem,
    editingItem,
    onApplyItem,
    onUpdateItem,
    onResetItem,
    onSubmitRedirectHref
}) {
    const classes = useStyles()

    const router = useRouter()

    const onItemSubmit = (event) => {
        event.preventDefault()
        onApplyItem()
        onResetItem && onResetItem()
        onSubmitRedirectHref && router.push(onSubmitRedirectHref)
    }

    const handleInputChange = (event) => {
        onUpdateItem(event.target.name, event.target.value)
    }

    const resetForm = (event) => {
        event.preventDefault()
        onResetItem && onResetItem()
    }

    useEffect(() => {
        if(itemId && onSetEditingItem) {
            if(onUnsetEditingItem) onUnsetEditingItem()
            onSetEditingItem(itemId)
        }
    }, [])
    return (
        <Box
        className={classes.root}
        component={Paper}>
            <Typography
            variant="h5"
            component="h2">
                {itemId ?
                `ویرایش ${editingItem.name}` :
                "افزودن کالای جدبد"}
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
                        value={editingItem.name}
                        onChange={handleInputChange} />
                        <TextField
                        label="گروه کالا"
                        type="text"
                        name="group"
                        value={editingItem.group}
                        onChange={handleInputChange} />
                        <TextField
                        label="واحد عمده"
                        type="text"
                        name="wholeUnit"
                        value={editingItem.wholeUnit}
                        onChange={handleInputChange} />
                        <TextField
                        label="موجودی به واحد عمده در انبار"
                        type="number"
                        name="wholeRemAmount"
                        value={editingItem.wholeRemAmount}
                        onChange={handleInputChange} />
                        <TextField
                        label="تعداد خرده ی موجود در واحد عمده"
                        type="number"
                        name="retialUnitRemInWholeUnit"
                        value={editingItem.retialUnitRemInWholeUnit}
                        onChange={handleInputChange} />
                        <TextField
                        label="واحد خرده"
                        type="text"
                        name="retialUnit"
                        value={editingItem.retialUnit}
                        onChange={handleInputChange} />
                        <TextField
                        label="موجودی به واحد خرده در انبار"
                        type="number"
                        name="retailUnitRemAmount"
                        value={editingItem.retailUnitRemAmount}
                        onChange={handleInputChange} />
                        <TextField
                        label="قیمت خرید"
                        type="number"
                        name="buyPrice"
                        value={editingItem.buyPrice}
                        onChange={handleInputChange} />
                        <TextField
                        label="قیمت فروش نقدی"
                        type="number"
                        name="cashSellPrice"
                        value={editingItem.cashSellPrice}
                        onChange={handleInputChange}
                        InputProps={{
                            startAdornment: 
                                <InputAdornment position="start">
                                    <Select
                                    value={editingItem.wholeUnit}>
                                        <MenuItem value={editingItem.wholeUnit}>{editingItem.wholeUnit}</MenuItem>
                                        <MenuItem value={editingItem.retialUnit}>{editingItem.retialUnit}</MenuItem>
                                    </Select>
                                </InputAdornment>
                        }} />
                        <TextField
                        label="قیمت فروش چکی"
                        type="number"
                        name="chequeSellPrice"
                        value={editingItem.chequeSellPrice}
                        onChange={handleInputChange} />
                        <TextField
                        label="قیمت فروش نسیه"
                        type="number"
                        name="loanSellPrice"
                        value={editingItem.loanSellPrice}
                        onChange={handleInputChange} />
                        <TextField
                        label="قیمت فروش ویژه"
                        type="number"
                        name="vipSellPrice"
                        value={editingItem.vipSellPrice}
                        onChange={handleInputChange} />
                        <TextField
                        label="قیمت مصرف کننده"
                        type="number"
                        name="costumerPrice"
                        value={editingItem.costumerPrice}
                        onChange={handleInputChange} />
                        <TextField
                        label="فروشنده"
                        type="text"
                        name="seller"
                        value={editingItem.seller}
                        onChange={handleInputChange} />
                        <TextField
                        label="شرکت"
                        type="text"
                        name="company"
                        value={editingItem.company}
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
                    {!itemId &&
                        <Grid item xs={12} md={6}>
                            <Button
                            variant="outlined"
                            color="primary"
                            onClick={resetForm}>
                                بازنشانی همه
                            </Button>
                        </Grid>
                    }
                </Grid>
            </form>
        </Box>
    )
}