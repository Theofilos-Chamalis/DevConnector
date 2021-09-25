import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteComment} from '../../actions/postActions';

class CommentItem extends Component {
    onDeleteClick = (event, postId, commentId) => {
        event.preventDefault();
        this.props.deleteComment(postId, commentId);
    };

    render() {
        const {comment, postId, auth} = this.props;

        return (
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-2">
                        <a href="profile.html">
                            <img
                                className="rounded-circle d-none d-md-block"
                                src={comment.avatar}
                                alt=""
                            />
                        </a>
                        <br/>
                        <p className="text-center">{comment.name}</p>
                    </div>
                    <div className="col-md-10">
                        <p className="lead">{comment.text}</p>
                        {comment.user === auth.user.id ? (
                            <button
                                className="btn btn-danger mr-1"
                                type="button"
                                onClick={event =>
                                    this.onDeleteClick(event, postId, comment._id)
                                }
                            >
                                <i className="fas fa-times"/>
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

CommentItem.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {deleteComment}
)(CommentItem);
