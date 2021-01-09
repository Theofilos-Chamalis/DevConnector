import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileActions';

class AddExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            title: '',
            location: '',
            from: '',
            to: '',
            current: false,
            description: '',
            errors: {},
            disabled: false
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const expData = {
            company: this.state.company,
            title: this.state.title,
            location: this.state.location,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description
        };

        this.props.addExperience(expData, this.props.history);
    };

    onCheck = () => {
        this.setState({
            disabled: !this.state.disabled,
            current: !this.state.current
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="add-experience">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">Add Experience</h1>
                            <p className="lead text-center">
                                Add past or current jobs & positions
                            </p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder="Company *"
                                    onChange={this.onChange}
                                    error={errors.company}
                                    value={this.state.company}
                                    name="company"
                                />
                                <TextFieldGroup
                                    placeholder="Job Title *"
                                    onChange={this.onChange}
                                    error={errors.title}
                                    value={this.state.title}
                                    name="title"
                                />
                                <TextFieldGroup
                                    placeholder="Location"
                                    onChange={this.onChange}
                                    error={errors.location}
                                    value={this.state.location}
                                    name="location"
                                />
                                <h6>From Date</h6>
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    error={errors.from}
                                    value={this.state.from}
                                    name="from"
                                    type="date"
                                />
                                <h6>To Date</h6>
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    error={errors.to}
                                    value={this.state.to}
                                    name="to"
                                    type="date"
                                    disabled={this.state.disabled ? 'disabled' : ''}
                                />
                                <div className="form-check mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="current"
                                        value={this.state.current}
                                        checked={this.state.current}
                                        onChange={this.onCheck}
                                        id="current"
                                    />
                                    <label htmlFor="current" className="form-check-label">
                                        Current Job / Position
                                    </label>
                                    <TextAreaFieldGroup
                                        onChange={this.onChange}
                                        value={this.state.description}
                                        name="description"
                                        placeholder="Job Description"
                                        error={errors.description}
                                        info="Brief info about the position"
                                    />
                                    <input
                                        type="submit"
                                        value="Submit"
                                        className="btn btn-info btn-block mt-4"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addExperience }
)(withRouter(AddExperience));
