import React from 'react';
import "./EmployeeDetail.css";


const employeeDetail = (props) => (
    <div className="detail-wrapper">
        <div className="popover">
            <div className="intro">
                <div>
                    <img className="emp-img" src={props.employee.img ? props.employee.img.src : ""} alt="Image Not Available" />
                </div>
                <div className="name-designation">
                    <div className="name">{props.employee.name}</div>
                    <div className="designation">{props.employee.designation}</div>
                </div>
            </div>
            <p className="team-heading">
                {props.employee.team}
            </p>
            <p className="team">
                {props.employee.team}
            </p>
            <p className="project-heading">
                {props.employee.currentProject}
            </p>
            <p className="project">
                {props.employee.currentProject}
            </p>
        </div>
    </div>
);

export default employeeDetail;