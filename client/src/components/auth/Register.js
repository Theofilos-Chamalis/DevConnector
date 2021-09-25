import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        // This is to bind the onChange listener function with the 'this' of the state (We don't need these if we use arrow functions like in Login component)
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    // If we receive new error props we are going to put them in the component state
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    // We need this for 2 way binding
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    }

    render() {
        const {errors} = this.state;

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">
                                Create your DevConnector account
                            </p>
                            <form
                                noValidate
                                onSubmit={
                                    this.onSubmit
                                } /* Avoid the native html5 validation for email */
                            >
                                <TextFieldGroup
                                    placeholder="Name"
                                    onChange={this.onChange}
                                    error={errors.name}
                                    value={this.state.name}
                                    name="name"
                                />
                                <TextFieldGroup
                                    placeholder="Email Address"
                                    type="email"
                                    onChange={this.onChange}
                                    error={errors.email}
                                    value={this.state.email}
                                    name="email"
                                    info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                                />
                                <TextFieldGroup
                                    placeholder="Password"
                                    type="password"
                                    onChange={this.onChange}
                                    error={errors.password}
                                    value={this.state.password}
                                    name="password"
                                />
                                <TextFieldGroup
                                    placeholder="Confirm Password"
                                    type="password"
                                    onChange={this.onChange}
                                    error={errors.password2}
                                    value={this.state.password2}
                                    name="password2"
                                />
                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

// The parenthesis are used in place of having a return statement
// When updates in the Redux store happen, map them to this component's props
const mapStateToProps = state => ({
    auth: state.auth, //The state.auth comes from the index.js of the reducers
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {registerUser}
)(withRouter(Register));
