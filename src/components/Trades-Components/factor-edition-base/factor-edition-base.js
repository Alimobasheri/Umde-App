import { AppBar, Box, Button, Card, CardContent, CardHeader, Dialog, DialogContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import Items from "../../../containers/items/items";

const FactorItemRow = ({item}) => {
    return (
        <TableRow>
            <TableCell>
                {item.name}
            </TableCell>
            <TableCell>
                {item.count}
            </TableCell>
            <TableCell>
                {item.price}
            </TableCell>
        </TableRow>
    )
}

export default function FactorEditionBase({
    type,
    editingFactor,
    onUpdateFactor,
    onAddItemToFactor,
    onApplyFactor,
    onResetFactor
}) {

    const handleInputChange = event => {
        onUpdateFactor(event.target.name, event.target.value)
    }

    const addItemToFactor = ({name, count, price}) => {
        onAddItemToFactor(name, count, price)
    }

    const [addItemDialogOpen, setAddItemDialogOpen] = useState(false)

    useEffect(() => {
        onResetFactor()
    }, [])
    return (
        <Box
        component="div">
            <Card>
                <CardHeader
                title="کالابرگ فروش" />
                <CardContent>
                    <Grid
                    container
                    spacing={1}>
                        <Grid
                        item
                        xs={12}>
                            <Grid
                            container
                            spacing={1}>
                                <Grid
                                item
                                xs={12}>
                                    <Typography
                                    variant="h5">
                                        مشخصات فاکتور معامله
                                    </Typography>
                                </Grid>
                                <Grid
                                item>
                                    <TextField
                                    size="small"
                                    label="خریدار"
                                    variant="outlined"
                                    name="costumer"
                                    id="costumer"
                                    value={editingFactor.costumer}
                                    onChange={handleInputChange} />
                                </Grid>
                                <Grid
                                item>
                                    <TextField
                                    size="small"
                                    label="تاریخ"
                                    variant="outlined"
                                    name="date"
                                    id="date"
                                    value={editingFactor.date}
                                    onChange={handleInputChange} />
                                </Grid>
                                <Grid
                                item>
                                    <TextField
                                    size="small"
                                    label="روش پرداخت"
                                    variant="outlined"
                                    name="mainPaymentMethod"
                                    id="mainPaymentMethod"
                                    value={editingFactor.mainPaymentMethod}
                                    onChange={handleInputChange} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                        item
                        xs={12}>
                            <Grid
                            container
                            spacing={1}>
                                <Grid
                                item
                                xs={12}>
                                    <Typography
                                    variant="h5">
                                        اقلام فاکتور
                                    </Typography>
                                </Grid>
                                <Grid
                                item
                                xs={12}>
                                    <TableContainer>
                                        <Table
                                        size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>
                                                        نام کالا
                                                    </TableCell>
                                                    <TableCell>
                                                        تعداد
                                                    </TableCell>
                                                    <TableCell>
                                                        فی
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {editingFactor.totalItemsCount <= 0 ?
                                                    <TableRow>
                                                        <TableCell
                                                        colSpan={3}>
                                                            کالایی به فاکتور افزوده نشده.
                                                        </TableCell>
                                                    </TableRow> :
                                                    editingFactor.factorItems.map((item, idx) => 
                                                        <FactorItemRow
                                                        item={item}
                                                        key={idx}/>
                                                    )
                                                }
                                                <TableRow>
                                                    <TableCell>
                                                        <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={e => setAddItemDialogOpen(true)}>
                                                            افزودن
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell
                                                    colSpan={1}>
                                                        مجموع تعداد اقلام: {editingFactor.totalItemsCount}
                                                    </TableCell>
                                                    <TableCell
                                                    colSpan={2}>
                                                        مجموع قابل پرداخت: {editingFactor.totalItemsPrice}
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                        item
                        xs={12}>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Dialog
            open={addItemDialogOpen}
            fullScreen>
                <DialogContent>
                    <AppBar
                    position="relative">
                        <Toolbar>
                            <Grid
                            container
                            justify="space-between">
                                <Grid
                                item
                                xs={12}
                                md={10}>
                                    <Typography
                                    variant="body1">
                                        کالاهای مورد نظر را برای افزودن به فاکتور از لیست زیر برگزینید.
                                    </Typography>
                                </Grid>
                                <Grid
                                item
                                xs={2}
                                md={1}>
                                    <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={e => setAddItemDialogOpen(false)}>
                                        ذخیره
                                    </Button>
                                </Grid>
                                <Grid
                                item
                                xs={2}
                                md={1}>
                                    <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={e => setAddItemDialogOpen(false)}>
                                        لغو
                                    </Button>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <Items
                    selectMode
                    onAddItems={addItemToFactor} />
                </DialogContent>
            </Dialog>
        </Box>
    )
}