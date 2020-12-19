import {createStore, combineReducers, applyMiddleware} from 'redux'

import items from '../reducers/items'
import factors from '../reducers/factors'

const saver = store => next => action => {
    const result = next(action)
    localStorage['Umde-App-Store'] = JSON.stringify(store.getState())
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
        lastRegisteredId: 10000
    },
    factors: {
        savedFactors: [],
        newFactor: {
            costumer: "",
            date: "",
            mainPaymentMethod: "",
            factorItems: [],
            totalItemsCount: 0,
            totalItemsPrice: 0,
            payments: [],
            pastAccounts: [],
            paid: false
        },
        editingFactor: {},
        savedFactorsCount: 0,
        lastRegisteredFactorId: 100000,
    }
}

export default function storeFactory(initialState=INITIAL_STATE) {
    if (typeof window === 'undefined') {
        return createStore(combineReducers({items, factors}), INITIAL_STATE)
    }
    return applyMiddleware(saver)(createStore)(
        combineReducers({items, factors}),
        typeof window !== 'undefined' && localStorage['Umde-App-Store'] ? 
            JSON.parse(localStorage['Umde-App-Store']) :
            initialState
    )
}