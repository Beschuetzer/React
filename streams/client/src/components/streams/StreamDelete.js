import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import Modal from '../Modal';

class StreamDelete extends React.Component {
    componentDidMount() {
        console.log('this.props.stream =', this.props.stream);
        if (!this.props.stream) this.props.fetchStream(this.props.match.params.id);
    }
    renderActions = () => {
        return (
            <div className='actions'>
                <button className="ui cancel red button">Delete</button>
                <button className="ui approve primary button">Cancel</button>
            </div>
        );
    }
    renderHeader = () => {
        return (
            <div className="header">
                Delete Stream
            </div>
        );
    }
    renderContent = () => {
        return (
            <div className="content">
                Are you sure you want to delete '{this.props.stream.title}'?
            </div>
        );
    }
    render() {
        if (!this.props.stream) return <div>Loading</div>
        return (
            <Modal 
                header={this.renderHeader()}
                content={this.renderContent()}
                actions={this.renderActions()}
                redirect="/"
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps =', ownProps);
    return {
        stream: state.streams[ownProps.match.params.id],
    }
}

export default connect(mapStateToProps, {
    fetchStream,
})(StreamDelete);