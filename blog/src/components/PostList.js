import React from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>PostList</div>
        );
    }
}
const mapStateToProps = state => {
    return {
        removeMe: state.removeMe,
    }
}
export default connect(mapStateToProps, {
    fetchPosts: fetchPosts,
})(PostList);