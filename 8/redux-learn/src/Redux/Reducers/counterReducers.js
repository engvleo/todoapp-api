import { DECREMENT, INCREMENT } from "../Action/Type";

const counterReducers = (state = {counter:0,}, action) => {
    switch (action.type) {
        case INCREMENT: return ({ ...state, counter: state.counter + 1 });
        case DECREMENT: return ({ ...state, counter: state.counter - 1 });
        default: return state;
    }
}
export default counterReducers;