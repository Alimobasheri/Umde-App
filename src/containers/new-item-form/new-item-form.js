import { connect } from 'react-redux'

import actions from '../../actions/action-creators'
import ItemEditionBase from '../../components/Items-Components/edit-item/edit-item'

const mapStateToProps = state => ({
    editingItem: state.items.newItem
})

const mapDispatchToProps = dispatch => ({
    onApplyItem() {
        dispatch(actions.addNewItem())
    },
    onResetItem() {
        dispatch(actions.resetNewItem())
    },
    onUpdateItem(itemProperty, itemPropertyValue) {
        dispatch(actions.updateNewItem(itemProperty, itemPropertyValue))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemEditionBase)