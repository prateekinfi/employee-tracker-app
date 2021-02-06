import React from 'react';
import { connect } from 'react-redux';
import Table from './Table/Table';
import "./TableList.css"

class TableList extends React.Component {

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


const mapStateToProps = (state) => { 
    return {
        tables: state.tables
    }
}

export default connect(mapStateToProps)(TableList);