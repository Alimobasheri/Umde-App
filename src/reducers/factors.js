import ACTION_TYPES from '../action-types/constants'

const factorItemTypes = {
    SELL: "SELL",
    BUY: "BUY"
}

const emptyFactorItemSchema = () => ({
    id: "",
    name: "",
    count: 0,
    price: 0,
    type: factorItemTypes.SELL
})

const paymentMethodTypes = {
    CASH: "CASH",
    POS: "POS",
    CHEQUE: "CHEQUE"
}

const accountTypes = {
    CREDIT: "CREDIT",
    DEBT: "DEBT"
}

const paymentSchema = {
    type: paymentMethodTypes.CASH,
    value: 0
}

const emptyFactorSchema = () => ({
    costumer: "",
    date: "",
    mainPaymentMethod: "",
    factorItems: [
    ],
    totalItemsCount: 0,
    totalItemsPrice: 0,
    payments: [],
    pastAccounts: [],
    paid: false
})

const initialFactorsState = {
    savedFactors: [],
    newFactor: emptyFactorSchema(),
    editingFactor: {},
    savedFactorsCount: 0,
    lastRegisteredFactorId: 100000,
}

export default function Factors(state=initialFactorsState, action) {
    switch(action.type) {
        case ACTION_TYPES.ADD_NEW_FACTOR:
            return ({
                ...state,
                savedFactors: {
                    ...state.newFactor,
                    id: state.lastRegisteredFactorId + 1
                },
                savedFactorsCount: state.savedFactorsCount + 1,
                lastRegisteredFactorId: state.lastRegisteredFactorId + 1
            })
        
        case ACTION_TYPES.UPDATE_NEW_FACTOR:
            return ({
                ...state,
                newFactor: {
                    ...state.newFactor,
                    [action.factorProperty]: action.factorPropertyValue
                }
            })
        
        case ACTION_TYPES.ADD_ITEM_TO_NEW_FACTOR:
            return ({
                ...state,
                newFactor: {
                    ...state.newFactor,
                    factorItems: [
                        ...state.newFactor.factorItems,
                        {
                            name: action.name,
                            count: action.count,
                            price: action.price
                        }
                    ],
                    totalItemsCount: state.newFactor.totalItemsCount + 1,
                    totalItemsPrice: parseInt(state.newFactor.totalItemsPrice) + (parseInt(action.price) * parseInt(action.count))
                }
            })
        
        case ACTION_TYPES.RESET_NEW_FACTOR:
            return ({
                ...state,
                newFactor: emptyFactorSchema()
            })
        
        default:
            return state
    }
}