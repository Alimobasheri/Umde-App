import items from "../../reducers/items";

import {makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    root: {
        overflow: "scroll"
    },
    table: {
        textAlign: 'right',
        ['& .MuiTableCell-root']: {
            textAlign: "right"
        },
        ['& .MuiTableCell-root:nth-child(1)']: {
            minWidth: 200
        }
    },
})

export default function ItemsList({items}) {
    const classes = useStyles()

    return (
        <TableContainer component={Paper} m={3}>
            <Table
            className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>نام کالا</TableCell>
                        <TableCell>گروه</TableCell>
                        <TableCell>موحودی</TableCell>
                        <TableCell>قیمت خرید</TableCell>
                        <TableCell>قیمت فروش</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item =>
                        <TableRow key={item.name}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.group}</TableCell>
                            <TableCell>{item.remAmount}</TableCell>
                            <TableCell>{item.buyPrice}</TableCell>
                            <TableCell>{item.sellPrice}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}