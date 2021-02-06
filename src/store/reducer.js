import { mockEmployees, mockTables } from '../mock/data';

const initialState = {
    ...mockEmployees,
    ...mockTables
}

const reducer = (state = initialState, action) => {
    return state;
}

export default reducer;