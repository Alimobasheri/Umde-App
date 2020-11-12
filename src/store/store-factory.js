import {createStore, combineReducers, applyMiddleware} from 'redux'

import items from '../reducers/items'

const saver = store => next => action => {
    console.log(store.getState())
    const result = next(action)
    localStorage['Umde-App-Store'] = JSON.stringify(store.getState())
    console.log(JSON.parse(localStorage['Umde-App-Store']))
    return result
}

const INITIAL_STATE = {
    items: {
        savedItems: [],
        newItem: {},
        displayNewItemForm: false,
        viewingItem: {},
        editingItem: {},
        addedItemsCount: 0,
    }
}

export default function storeFactory(initialState=INITIAL_STATE) {
    if (typeof window === 'undefined') {
        return createStore(combineReducers({items}), INITIAL_STATE)
    }
    return applyMiddleware(saver)(createStore)(
        combineReducers({items}),
        typeof window !== 'undefined' && localStorage['Umde-App-Store'] ? 
            JSON.parse(localStorage['Umde-App-Store']) :
            initialState
    )
}