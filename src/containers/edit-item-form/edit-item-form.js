import {connect} from 'react-redux'

import actions from '../../actions/action-creators'
import ItemEditionBase from '../../components/Items-Components/edit-item/edit-item'

const mapStateToPropsForEditItemForm = state => ({
    editingItem: state.items.editingItem
})

const mapDispatchToPropsForEditItemForm = dispatch => ({
    onApplyItem() {
        dispatch(actions.applyEditingItem())
    },
    onSetEditingItem(id) {
        dispatch(actions.setEditingItem(id))
    },
    onUnsetEditingItem(){
        dispatch(actions.unsetEditingItem())
    },
    onUpdateItem(itemProperty, itemPropertyValue) {
        dispatch(actions.updateEditingItem(itemProperty, itemPropertyValue))
    },
})

export default connect(mapStateToPropsForEditItemForm, mapDispatchToPropsForEditItemForm)(ItemEditionBase)