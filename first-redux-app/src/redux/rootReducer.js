import {combineReducers} from 'redux'; // Комбинирует все имеющиеся state в один store
import counter1 from './reducers/counter1';
import counter2 from './reducers/counter2';

export default combineReducers({
    counter1, counter2
})