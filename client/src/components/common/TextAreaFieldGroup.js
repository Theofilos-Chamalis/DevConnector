import React      from 'react';
import classnames from 'classnames';
import PropTypes  from 'prop-types';

// Pass properties in the functional (stateless) component
const TextAreaFieldGroup = ( { name, placeholder, value, error, info, onChange } ) => {
    return (
        <div className = 'form-group'>
            <textarea className = { classnames ( 'form-control form-control-lg',
                { 'is-invalid' : error } ) }
                      placeholder = { placeholder }
                      value = { value }
                      onChange = { onChange }
                      name = { name }/>
            { info && <small className = 'form-text text-muted'>{ info }</small> }
            { error && ( <div className = 'invalid-feedback'>{ error }</div> ) }
        </div>
    );
};

TextAreaFieldGroup.propTypes = {
    name : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    value : PropTypes.string.isRequired,
    info : PropTypes.string,
    error : PropTypes.string,
    onChange : PropTypes.func.isRequired
};

export default TextAreaFieldGroup;