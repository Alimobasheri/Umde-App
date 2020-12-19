import ACTION_TYPES from '../action-types/constants'

const initialItemsState = {
    savedItems: [],
    newItem: {},
    displayNewItemForm: false,
    viewingItem: {},
    addedItemsCount: 0,
    lastRegisteredId: 10000,
    editingItem: {}
}

export default function items (state=initialItemsState, action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_NEW_ITEM:
            return ({
                ...state,
                addedItemsCount: state.addedItemsCount+1,
                savedItems: [
                    ...state.savedItems,
                    {
                        ...state.newItem,
                        id: state.lastRegisteredId+1
                    }
                ],
                lastRegisteredId: state.lastRegisteredId+1
            })
        
        case ACTION_TYPES.DISPLAY_NEW_ITEM_FORM:
            return ({
                ...state,
                displayNewItemForm: action.shouldDisplay
            })
        
        case ACTION_TYPES.RESET_NEW_ITEM:
            return ({
                ...state,
                newItem: {
                    name: "",
                    group: "",
                    buyPrice: "",
                    wholeUnit: "کارتن",
                    wholeRemAmount: "",
                    retialUnit: "قوطی",
                    retailRemAmount: "",
                    retialUnitRemInWholeUnit: "",
                    retailUnitCashSellPrice: "",
                    retailUnitLoanSellPrice: "",
                    cashSellPrice: "",
                    chequeSellPrice: "",
                    loanSellPrice: "",
                    vipSellPrice: "",
                    costumerPrice: "",
                    seller: "",
                    company: "",
                    buyFactors: [],
                    sellFactors: []
                }
            })
        
        case ACTION_TYPES.UPDATE_NEW_ITEM:
            return ({
                ...state,
                newItem: {
                    ...state.newItem,
                    [action.itemProperty]: action.itemPropertyValue
                }
            })
        
        case ACTION_TYPES.SET_EDITING_ITEM:
            return ({
                ...state,
                editingItem: state.savedItems.filter(item => item.id == action.id)[0]
            })
        
        case ACTION_TYPES.UPDATE_EDITING_ITEM:
            return ({
                ...state,
                editingItem: {
                    ...state.editingItem,
                    [action.itemProperty]: action.itemPropertyValue
                }
            })
        
        case ACTION_TYPES.APPLY_EDITING_ITEM:
            return ({
                ...state,
                savedItems: state.savedItems.map(item =>
                    item.id === state.editingItem.id ?
                        state.editingItem :
                        item    
                )
            })

            case ACTION_TYPES.UNSET_EDITING_ITEM:
                return ({
                    ...state,
                    editingItem: {}
                })
        
        case ACTION_TYPES.SET_VIEWING_ITEM:
            return ({
                ...state,
                viewingItem: state.savedItems.filter(item => item.id === action.id)[0]
            })
        
        case ACTION_TYPES.REMOVE_ITEM:
            return ({
                ...state,
                savedItems: state.savedItems.filter(item => item.id !== action.id),
                addedItemsCount: state.addedItemsCount - 1
            })
        
        default:
            return state
    }
}