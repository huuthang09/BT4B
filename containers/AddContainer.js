import { connect } from 'react-redux';
import Home from '../design/UserScreen';

//Actions
import { addAction } from '../actions/UserActions';

const mapStateToProps = (state) => {    
    return {        
       text: state.addReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text, data) => {                        
            dispatch(addAction(text, data));
            data.push(text);
        },
    };
}
const AddContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default AddContainer;