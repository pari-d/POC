import { connect } from 'react-redux';
import { fetchListAction, changeListData, setSelectedTravellerAction } from '../../store/actions';
import Home from './Home';

const mapStateToProps = (state) => ({
    travellerList: state.travellerList,
    errorMessage: state.errorText,
    isError: state.error
})

const mapDispatchToProps = (dispatch) => ({
    fetchTravellerList: () => dispatch(fetchListAction()),
    selectedTraveller: (data) => dispatch(setSelectedTravellerAction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);