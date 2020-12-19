import ACTION_TYPES from '../action-types/constants'

const resetNewFactor = () => ({
    type: ACTION_TYPES.RESET_NEW_FACTOR
})

const updateNewFactor = (factorProperty, factorPropertyValue) => ({
    type: ACTION_TYPES.UPDATE_NEW_FACTOR,
    factorProperty,
    factorPropertyValue
})

const addItemToNewFactor = (name, count, price) => ({
    type: ACTION_TYPES.ADD_ITEM_TO_NEW_FACTOR,
    name,
    count,
    price
})

const addNewFactor = () => ({
    type: ACTION_TYPES.ADD_NEW_FACTOR,
})

export {
    resetNewFactor,
    updateNewFactor,
    addItemToNewFactor,
    addNewFactor
}