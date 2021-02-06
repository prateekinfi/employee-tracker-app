import React from 'react';
import { connect } from 'react-redux';

import "./Search.css";

class Search extends React.Component {
    state = {
        inputVal: ""
    }

    onInputHandler(e) { 
        this.props.search(e.target.value);
        this.setState({ inputVal: e.target.value });
    }

    render() {
        return (
            <div className="search">
                <input type="text"
                    placeholder="Search by Name"
                    value={this.state.inputVal}
                    onChange={(e)=>{this.onInputHandler.call(this,e)}} />
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        search: (value) => { dispatch({ type: "SEARCH", searchVal: value }) }
    }
}


export default connect(null, mapDispatchToProps)(Search);