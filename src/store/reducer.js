import { mockEmployees, mockTables } from '../mock/data';

const initialState = {
    ...mockEmployees,
    ...mockTables,
    searchResults: [],
    showSearchDetail: false
}

const reducer = (state = initialState, action) => {
    if (action.type === "SEARCH") {
        let searchResults = state.employees.filter((emp) => {
            return emp.name.toLowerCase().startsWith(action.searchVal.toLowerCase())
        });
        let showSearchDetail = false;
        
        if (action.searchVal === "")
            searchResults = [];
        
        if (searchResults.length === 1)
            showSearchDetail = true;
        
        return {
            ...state,
            searchResults: searchResults,
            showSearchDetail: showSearchDetail
        }
    }
    return state;
}

export default reducer;