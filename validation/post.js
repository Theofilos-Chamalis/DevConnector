const Validator = require ( 'validator' );
const isEmpty = require ( './is-empty' );

module.exports = function validatePostInput ( data ) {
    let errors = {};

    // If it doesn't pass our custom validation then we make it an empty string in order to fail later
    data.text = !isEmpty ( data.text ) ? data.text : '';

    if ( !Validator.isLength ( data.text, { min : 5, max : 300 } ) ) {
        errors.text = 'Posts must be between 5 and 300 characters';
    }

    if ( Validator.isEmpty ( data.text ) ) {
        errors.text = 'Text field is required';
    }

    return {
        errors,
        isValid : isEmpty ( errors )
    };
};
