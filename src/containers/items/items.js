import {connect} from 'react-redux'

import actions from '../../actions/action-creators'
import Items from '../../components/items/items'

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    onAddNewItem() {
        dispatch(actions.addNewItem())
    },
    onDisplayNewItemForm(shouldDisplay) {
        dispatch(actions.displayNewItemForm(shouldDisplay))
    },
    onResetNewItem() {
        dispatch(actions.resetNewItem())
    },
    onUpdateNewItem(itemProperty, itemPropertyValue) {
        dispatch(actions.updateNewItem(itemProperty, itemPropertyValue))
    },
    onRemoveItem(itemId) {
        dispatch(actions.removeItem(itemId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)