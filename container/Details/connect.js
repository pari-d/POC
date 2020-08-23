import { connect } from 'react-redux';
import Details from './Details';

const mapStateToProps = (state) => ({
    selectedTraveller: state.selectedTraveller
})

export default connect(mapStateToProps, null)(Details);