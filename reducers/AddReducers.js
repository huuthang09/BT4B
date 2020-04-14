import { ADD } from '../actions/actions';

const addReducers = (step = 0, action) => {
    switch (action.type) {
        case ADD:
            return step++;   
        default:
            return step;
    }
}

export default addReducers;