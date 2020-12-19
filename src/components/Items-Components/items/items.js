import {useState} from 'react'

import ItemsList from '../items-list'

import { Box, List, ListItem, makeStyles, TextField, Typography } from '@material-ui/core'

const useItemsStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        maxWidth: "100%"
    },
    searchBar: {
        margin: `${theme.spacing(2)}px 0px`,
        backgroundColor: theme.palette.background.paper
    }
}))

export default function Items({
    items,
    onRemoveItem,
    selectMode,
    onAddItems
}) {
    const {
        savedItems,
    } = items

    const classes = useItemsStyles()

    const [searchText, setSearchText] = useState("")

    const [addedItems, setAddedItems] = useState([])

    const addItem = (item) => {
        setAddedItems([
            ...addedItems,
            {
                name: item.name,
                count: item.count,
                price: item.price
            }
        ])
        onAddItems({
            name: item.name,
            count: item.count,
            price: item.price
        })
    }
    return (
        <Box
        className={classes.root}>
            {selectMode && 
                <Box>
                    <Typography
                    variant="h6">
                        اقلام انتخاب شده:
                    </Typography>
                    <List>
                        {addedItems.map((item, idx) => 
                            <ListItem
                            key={idx}>
                                {item.name} - {item.count} - {item.price}
                            </ListItem>
                        )}
                    </List>
                </Box>
            }
            <TextField
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
            className={classes.searchBar}
            variant="outlined"
            color="secondary"
            fullWidth
            label="جستجوی کالا"
            placeholder="مثال: دوغزال" />
            <ItemsList
            items={savedItems.filter(item => item.name.includes(searchText))}
            onRemoveItem={onRemoveItem}
            selectMode={selectMode}
            onAddItemCallback={addItem} />
        </Box>
    )
}