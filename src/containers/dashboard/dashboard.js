import {connect} from 'react-redux'
import Dashboard from '../../components/dashboard/dashboard'

const mapStateToProps = state => ({
    itemsCount: state.items.addedItemsCount
})

export default connect(mapStateToProps)(Dashboard)