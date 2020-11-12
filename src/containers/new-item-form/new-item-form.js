import { connect } from 'react-redux'

import actions from '../../actions/action-creators'
import NewItemForm from '../../components/new-item-form/new-item-form'

const mapStateToProps = state => ({
    newItem: state.items.newItem
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
})

export default connect(mapStateToProps, mapDispatchToProps)(NewItemForm)