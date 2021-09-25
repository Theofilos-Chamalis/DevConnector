import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {deleteExperience} from '../../actions/profileActions';

class Experience extends Component {
    onDeleteClick = (e, id) => {
        e.preventDefault();
        this.props.deleteExperience(id);
    };

    render() {
        const experience = this.props.experience.map(exp => (
            <tr key={exp._id}>
                <td>{exp.company}</td>
                <td>{exp.title}</td>
                <td>
                    {dayjs(exp.from).format('YYYY/MM/DD')} - {exp.to === null ? (
                    ' Now'
                ) : (
                    dayjs(exp.to).format('YYYY/MM/DD')
                )}
                </td>
                <td>
                    <button
                        onClick={e => this.onDeleteClick(e, exp._id)}
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));
        return (
            <div>
                <h4 className="mb-4">Experience Credentials</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Years</th>
                        <th/>
                    </tr>
                    {experience}
                    </thead>
                </table>
            </div>
        );
    }
}

Experience.propTypes = {
    deleteExperience: PropTypes.func.isRequired
};

export default connect(
    null,
    {deleteExperience}
)(Experience);
