import React,{useState} from 'react'

import Link from 'next/link'

import {makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import { Box, Button, Collapse, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Hidden, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@material-ui/core'
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/AddCircle'

const useStyles = makeStyles(theme => ({
    root: {
        padding: `${theme.spacing(2)}px`,
        maxWidth: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1)
        }
    },
    table: {
        textAlign: 'right',
        overflow: "scroll",
        ['& .MuiTableCell-root']: {
            textAlign: "right",
            [theme.breakpoints.up('md')]: {
                minWidth: '100px'
            }
        },
        ['& .MuiTableCell-root:nth-child(1)']: {
            minWidth: 100,
            [theme.breakpoints.down('sm')]: {
                minWidth: 100
            }
        }
    },
}))

const ConfirmDeleteDialog = ({itemName, onClose, open}) => {
    return (
        <Dialog
        open={open}>
            <DialogTitle>تایید حذف</DialogTitle>
            <DialogContent>
                آیا می خواهید آیتم {itemName} را حذف کنید؟
            </DialogContent>
            <DialogActions>
                <Button
                onClick={() => onClose(false)}>خیر</Button>
                <Button
                onClick={() => onClose(true)}>حذف</Button>
            </DialogActions>
        </Dialog>
    )
}

const AddItemDialog = ({item, open, itemAddition, setItemAddition, onClose}) => {
    const handleInputChange = event => {
        setItemAddition({
            ...itemAddition,
            [event.target.name]: event.target.value
        })
    }
    return (
        <Dialog
        open={open}>
            <DialogTitle>افزودن کالا به فاکتور</DialogTitle>
            <DialogContent>
                <Grid
                container>
                    <Grid
                    item
                    xs={12}>
                        <Typography
                        variant="subtitle1">
                            {item.name}
                        </Typography>
                    </Grid>
                    <Grid
                    item
                    xs={12}>
                        <TextField
                        label="تعداد"
                        name="count"
                        id="count"
                        type="number"
                        value={itemAddition.count}
                        onChange={handleInputChange}/>
                    </Grid>
                    <Grid
                    item
                    xs={12}>
                        <TextField
                        label="قیمت"
                        name="price"
                        id="price"
                        type="number"
                        value={itemAddition.price}
                        onChange={handleInputChange}/>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button
                onClick={() => onClose(false)}>
                    لغو
                </Button>
                <Button
                color="primary"
                onClick={() => onClose(true)}>
                    ذخیره
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const ItemRow = ({item, selectMode, onAddItem, onRemoveItem}) => {
    const [itemCollapseOpen, setItemCollapseOpen] = useState(false)

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const handleDeleteDialogClose = (confirmed) => {
        setDeleteDialogOpen(false)
        if(confirmed) {
            onRemoveItem(item.id)
        }
    }

    const [addItemDialogOpen, setAddItemDialogOpen] = useState(false)
    const [itemAddition, setItemAddition] = useState({
        count: 1,
        price: item.cashSellPrice
    })
    const handleAddItemDialog = (confirmed) => {
        setAddItemDialogOpen(false)
        if(confirmed) {
            onAddItem({
                name: item.name, 
                count: itemAddition.count, 
                price: itemAddition.price
            })
        }
    }

    const itemPropsCells = [
        {
            title: "گروه",
            value: item.group
        },
        {
            title: "موجودی",
            value: item.remAmount
        },
        {
            title: "قیمت فروش چکی",
            value: item.chequeSellPrice
        },
        {
            title: "قیمت فروش قرضی",
            value: item.loanSellPrice
        },
        {
            title: "قیمت فروش ویژه",
            value: item.vipSellPrice
        },
        {
            title: "تعداد واحد خرد در واحد عمده",
            value: item.retialUnitRemInWholeUnit
        },
        {
            title: "موجودی",
            value: `${item.wholeRemAmount !== "" ? item.wholeRemAmount : 0} ${item.wholeUnit} و ${item.retailRemAmount !== "" ? item.retailRemAmount : 0} ${item.retialUnit}`
        },
        {
            title: "فروشنده",
            value: item.seller
        },
        {
            title: "شرکت",
            value: item.company
        }
    ]
    return (
        <React.Fragment>
            <TableRow>
                {selectMode &&
                    <TableCell>
                        <IconButton
                        onClick={() => setAddItemDialogOpen(true)}>
                            <AddIcon />
                        </IconButton>
                    </TableCell>
                }
                <TableCell>
                    <Grid
                    container>
                        <Grid
                        item
                        xs={12}>
                            <Hidden
                            mdUp>
                                <IconButton
                                onClick={e => setItemCollapseOpen(!itemCollapseOpen)}>
                                    {itemCollapseOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
                                </IconButton>
                            </Hidden>
                            {item.name}
                        </Grid>
                        <Grid
                        item
                        xs={12}>
                            <Link
                            href={`/items/${item.id}`}>
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                            </Link>
                            <IconButton
                            onClick={() => setDeleteDialogOpen(true)}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </TableCell>
                <Hidden
                smDown>
                    <TableCell>{item.group}</TableCell>
                    <TableCell>{item.remAmount}</TableCell>
                </Hidden>
                <TableCell>{item.costumerPrice}</TableCell>
                <TableCell>{item.buyPrice}</TableCell>
                <TableCell>{item.cashSellPrice}</TableCell>
                <Hidden
                smDown>
                    <TableCell>{item.chequeSellPrice}</TableCell>
                    <TableCell>{item.loanSellPrice}</TableCell>
                    <TableCell>{item.vipSellPrice}</TableCell>
                    <TableCell>{item.retialUnitRemInWholeUnit}</TableCell>
                    <TableCell>{item.seller}</TableCell>
                    <TableCell>{item.company}</TableCell>
                </Hidden>
            </TableRow>
            <TableRow>
                <Hidden
                mdUp>
                    <Collapse
                    in={itemCollapseOpen}>
                        <Box>
                            <List>
                                {itemPropsCells.map((prop, idx) =>
                                    <ListItem
                                    key={idx}>
                                        <ListItemText
                                        primary={prop.title}
                                        secondary={prop.value} />
                                    </ListItem>
                                )}
                            </List>
                        </Box>
                    </Collapse>
                </Hidden>
            </TableRow>
            <ConfirmDeleteDialog
            itemName={item.name}
            open={deleteDialogOpen}
            onClose={handleDeleteDialogClose}/>
            <AddItemDialog
            open={addItemDialogOpen}
            item={item}
            itemAddition={itemAddition}
            setItemAddition={setItemAddition}
            onClose={handleAddItemDialog}/>
        </React.Fragment>
    )
}

export default function ItemsList({items, selectMode, onAddItemCallback, onRemoveItem}) {
    const classes = useStyles()

    return (
        <TableContainer className={classes.root} component={Paper} m={3} elevation={0}>
            <Table
            className={classes.table}>
                <TableHead>
                    <TableRow>
                        {selectMode &&
                            <TableCell>
                                انتخاب
                            </TableCell>
                        }
                        <TableCell>نام کالا</TableCell>
                        <Hidden
                        smDown>
                            <TableCell>گروه</TableCell>
                            <TableCell>موجودی</TableCell>
                        </Hidden>
                        <TableCell>قیمت مصرف کننده</TableCell>
                        <TableCell>قیمت خرید</TableCell>
                        <TableCell>قیمت فروش نقدی</TableCell>
                        <Hidden
                        smDown>
                            <TableCell>قیمت فروش چکی</TableCell>
                            <TableCell>قیمت فروش قرضی</TableCell>
                            <TableCell>قیمت فروش ویژه</TableCell>
                            <TableCell>تعداد واحد خرد در واحد عمده</TableCell>
                            <TableCell>فروشنده</TableCell>
                            <TableCell>شرکت</TableCell>
                        </Hidden>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item =>
                        <ItemRow 
                        key={item.id} 
                        item={item} 
                        onRemoveItem={onRemoveItem}
                        selectMode={selectMode}
                        onAddItem={onAddItemCallback} />
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}