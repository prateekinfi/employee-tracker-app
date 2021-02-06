import React from 'react';
import "./Seat.css";
import EmployeeDetail from "../Employee/EmployeeDetail/EmployeeDetail";

class Seat extends React.Component {
    state = {
        showDetails: false
    }

    toggleShowDetails() {
        this.setState({ showDetails: !this.state.showDetails })
    }
    render() {
        let classList = ["seat"];

        if (this.props.seat.employee) {
            classList.push("occupied")
        }
        return (
            <div
                className={classList.join(" ")}
                onMouseEnter={this.toggleShowDetails.bind(this)}
                onMouseLeave={this.toggleShowDetails.bind(this)}>
                {this.state.showDetails && this.props.seat.employee ?
                    <EmployeeDetail employee={this.props.seat.employee} />
                    : null}
            </div>
        );
    }
}

export default Seat;