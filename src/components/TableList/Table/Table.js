import React from 'react';
import { connect } from 'react-redux';

import Seat from '../../Employee/Seat'
import "./Table.css";

class Table extends React.Component {
    state = {
        tableSeats: []
    }

    componentDidMount() {

        let newState = {
            tableSeats: this.props.table.seats.map((seat) => {
                let employeeList = this.props.employees.filter(employee => {
                    return employee.seatIdentifier == seat.identifier;
                }),
                    employee = employeeList[0];
                return {
                    ...seat,
                    employee: employee
                }
            })
        }
        this.setState(newState)

    }
    componentDidUpdate() { 

    }

    render() {
       
        return (
            <div className="table">
                <div>{this.props.table.title}</div>
                <div>
                    {this.state.tableSeats.map(seat => {
                        let flag = this.props.searchResults.find((emp) => { return emp.seatIdentifier === seat.identifier; }) ? true : false;
                        return <Seat key={seat.identifier} seat={seat} isSearchResult={flag} showSearchDetail={this.props.showSearchDetail}/>
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
        searchResults: state.searchResults,
        showSearchDetail:state.showSearchDetail
    }
}

export default connect(mapStateToProps)(Table);