import ItemsList from '../items-list'

import Container from '@material-ui/core/Container'

export default function Items({
    items,
    onRemoveItem
}) {
    const {
        savedItems,
    } = items

    return (
        <Container maxWidth='lg' pt={2}>
            <ItemsList
            items={savedItems}
            onRemoveItem={onRemoveItem} />
        </Container>
    )
}