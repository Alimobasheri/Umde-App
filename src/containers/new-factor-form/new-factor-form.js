import {connect} from 'react-redux'

import {addNewFactor, updateNewFactor, resetNewFactor, addItemToNewFactor} from '../../actions/factors-action-creators'

import FactorEditionBase from '../../components/Trades-Components/factor-edition-base'

const mapStateToPropsForNewFactorForm = state => ({
    type: "NEW_FACTOR",
    editingFactor: state.factors.newFactor
})

const mapDispatchToPropsForNewFactorForm = dispatch => ({
    onApplyFactor() {
        dispatch(addNewFactor())
    },
    onUpdateFactor(property, value) {
        dispatch(updateNewFactor(property, value))
    },
    onAddItemToFactor(name, count, price) {
        dispatch(addItemToNewFactor(name, count, price))
    },
    onResetFactor() {
        dispatch(resetNewFactor())
    }
})

export default connect(mapStateToPropsForNewFactorForm, mapDispatchToPropsForNewFactorForm)(FactorEditionBase)