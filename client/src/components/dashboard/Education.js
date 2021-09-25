import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteEducation} from '../../actions/profileActions';
import dayjs from 'dayjs';

class Education extends Component {
    onDeleteClick = (e, id) => {
        e.preventDefault();
        this.props.deleteEducation(id);
    };

    render() {
        const education = this.props.education.map(edu => (
            <tr key={edu._id}>
                <td>{edu.school}</td>
                <td>{edu.degree}</td>
                <td>
                    {dayjs(edu.from).format('YYYY/MM/DD')} - {edu.to === null ? (
                    ' Now'
                ) : (
                    dayjs(edu.to).format('YYYY/MM/DD')
                )}
                </td>
                <td>
                    <button
                        onClick={e => this.onDeleteClick(e, edu._id)}
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));
        return (
            <div>
                <h4 className="mb-4">Education Credentials</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Years</th>
                        <th/>
                    </tr>
                    {education}
                    </thead>
                </table>
            </div>
        );
    }
}

Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
};

export default connect(
    null,
    {deleteEducation}
)(Education);
