import React from 'react';
import { connect } from 'react-redux';
import Table from './Table/Table';
import "./TableList.css"

class TableList extends React.Component {
    // componentDidMount() { 
    //     // this.props.updateSeatsWithEmployes
    // }

    render() { 
        return (
            <div className="tables-container">
                {this.props.tables.map((table) => { 
                    return <Table key={table.id} table={table}/>;
                })}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
        // updateSeatsWithEmployes : dispatch({type:"UPDATE_SEATS"})
    }
}
const mapStateToProps = (state) => { 
    return {
        tables: state.tables
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TableList);