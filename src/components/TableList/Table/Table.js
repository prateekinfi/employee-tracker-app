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
                    console.log(employee.seatIdentifier, seat.identifier, employee.seatIdentifier == seat.identifier)
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


    render() {
        return (
            <div className="table">
                <div>{this.props.table.title}</div>
                <div>
                    {this.state.tableSeats.map(seat => {
                        return <Seat key={seat.identifier} seat={seat} />
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(Table);