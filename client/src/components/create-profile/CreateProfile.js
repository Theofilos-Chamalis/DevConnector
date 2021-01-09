import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { createProfile } from '../../actions/profileActions';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubusername: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            instagram: '',
            youtube: '',
            errors: {}
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit = e => {
        e.preventDefault();

        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            instagram: this.state.instagram,
            youtube: this.state.youtube
        };

        this.props.createProfile(profileData, this.props.history);
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { errors, displaySocialInputs } = this.state;

        let socialInputs;

        if (displaySocialInputs) {
            socialInputs = (
                <div>
                    <InputGroup
                        placeholder="Facebook Profile URL"
                        name="facebook"
                        icon="fab fa-facebook"
                        value={this.state.facebook}
                        onChange={this.onChange}
                        error={errors.facebook}
                    />
                    <InputGroup
                        placeholder="Twitter Profile URL"
                        name="twitter"
                        icon="fab fa-twitter"
                        value={this.state.twitter}
                        onChange={this.onChange}
                        error={errors.twitter}
                    />
                    <InputGroup
                        placeholder="LinkedIn Profile URL"
                        name="linkedin"
                        icon="fab fa-linkedin"
                        value={this.state.linkedin}
                        onChange={this.onChange}
                        error={errors.linkedin}
                    />
                    <InputGroup
                        placeholder="Instagram Profile URL"
                        name="instagram"
                        icon="fab fa-instagram"
                        value={this.state.instagram}
                        onChange={this.onChange}
                        error={errors.instagram}
                    />
                    <InputGroup
                        placeholder="Youtube Profile URL"
                        name="youtube"
                        icon="fab fa-youtube"
                        value={this.state.youtube}
                        onChange={this.onChange}
                        error={errors.youtube}
                    />
                </div>
            );
        }

        // Select options for status
        const options = [
            { label: 'Select Professional Status *', value: 0 },
            { label: 'Developer', value: 'Developer' },
            { label: 'Junior Developer', value: 'Junior Developer' },
            { label: 'Senior Developer', value: 'Senior Developer' },
            { label: 'Manager', value: 'Manager' },
            { label: 'Student', value: 'Student' },
            { label: 'Instructor/Teacher', value: 'Instructor/Teacher' },
            { label: 'Intern', value: 'Intern' },
            { label: 'Other', value: 'Other' }
        ];

        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Create Your Profile</h1>
                            <p className="lead text-center">
                                Let's make your profile stand out
                            </p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form noValidate onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder="Profile URL Handle *"
                                    info="A unique handle for your profile URL. It can be your full name, company name, nickname, etc"
                                    error={errors.handle}
                                    onChange={this.onChange}
                                    value={this.state.handle}
                                    name="handle"
                                />
                                <SelectListGroup
                                    placeholder="Career Status"
                                    options={options}
                                    info="Your current career status"
                                    error={errors.status}
                                    onChange={this.onChange}
                                    value={this.state.status}
                                    name="status"
                                />
                                <TextFieldGroup
                                    placeholder="Company"
                                    info="Your personal company or the one you work for"
                                    error={errors.company}
                                    onChange={this.onChange}
                                    value={this.state.company}
                                    name="company"
                                />
                                <TextFieldGroup
                                    placeholder="Website"
                                    info="Your own website or a company one"
                                    error={errors.website}
                                    onChange={this.onChange}
                                    value={this.state.website}
                                    name="website"
                                />
                                <TextFieldGroup
                                    placeholder="Location"
                                    info="Your place of origin (e.g. Athens, GR)"
                                    error={errors.location}
                                    onChange={this.onChange}
                                    value={this.state.location}
                                    name="location"
                                />
                                <TextFieldGroup
                                    placeholder="Skills *"
                                    info="Your personal skills & knowledge (e.g. HTML, CSS, Javascript, Mathematics)"
                                    error={errors.skills}
                                    onChange={this.onChange}
                                    value={this.state.skills}
                                    name="skills"
                                />
                                <TextFieldGroup
                                    placeholder="Github Username"
                                    info="Github integration with your repos and Github profile"
                                    error={errors.githubusername}
                                    onChange={this.onChange}
                                    value={this.state.githubusername}
                                    name="githubusername"
                                />
                                <TextAreaFieldGroup
                                    placeholder="Short Bio"
                                    info="A short description of yourself"
                                    error={errors.bio}
                                    onChange={this.onChange}
                                    value={this.state.bio}
                                    name="bio"
                                />

                                <div className="mb-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            this.setState(prevState => ({
                                                displaySocialInputs: !prevState.displaySocialInputs
                                            }));
                                        }}
                                        className="btn btn-default"
                                    >
                                        Add Social Network Accounts
                                    </button>
                                    <span className="text-muted ml-3">Optional</span>
                                </div>
                                {socialInputs}
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-info btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { createProfile }
)(withRouter(CreateProfile));
