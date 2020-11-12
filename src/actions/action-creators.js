import ACTION_TYPES from '../action-types/constants'

const actions = {}

actions.displayNewItemForm = (shouldDisplay) => ({
    type: ACTION_TYPES.DISPLAY_NEW_ITEM_FORM,
    shouldDisplay
})

actions.resetNewItem = () => ({
    type: ACTION_TYPES.RESET_NEW_ITEM
})

actions.updateNewItem = (itemProperty, itemPropertyValue) => ({
    type: ACTION_TYPES.UPDATE_NEW_ITEM,
    itemProperty,
    itemPropertyValue
})

actions.addNewItem = () => ({
    type: ACTION_TYPES.ADD_NEW_ITEM
})

actions.setEditingItem = (id) => ({
    type: ACTION_TYPES.SET_EDITING_ITEM,
    id
})

actions.updateEditingItem = (itemProperty, itemPropertyValue) => ({
    type: ACTION_TYPES.UPDATE_EDITING_ITEM,
    itemProperty,
    itemPropertyValue
})

actions.applyEditingItem = (id) => ({
    type: ACTION_TYPES.APPLY_EDITING_ITEM,
    id
})

actions.setViewingItem = (id) => ({
    type: ACTION_TYPES.SET_VIEWING_ITEM,
    id
})

actions.removeItem = (id) => ({
    type: ACTION_TYPES.REMOVE_ITEM,
    id
})

export default actions