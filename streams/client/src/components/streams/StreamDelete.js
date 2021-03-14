import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
    componentDidMount() {
        console.log('this.props.stream =', this.props.stream);
        if (!this.props.stream) this.props.fetchStream(this.props.match.params.id);
    }
    renderHeader = () => {
        return (
            <div className="header">
                Delete Stream
            </div>
        );
    }
    renderContent = () => {
        let content = "Are you sure you want to delete this stream?"
        if (this.props.stream) {
            content = `Are you sure you want to delete the stream '${this.props.stream.title}'?`;
        }
        return (
            <div className="content">
                {content}
            </div>
        );
    }
    renderActions = () => {
        const id = this.props.match.params.id;

        return (
            <div className='actions'>
                <button 
                    onClick={() => this.props.deleteStream(id)} 
                    className="ui cancel red button"
                >
                    Delete
                </button>
                <Link to='/' className="ui approve primary button">Cancel</Link>
            </div>
        );
    }
    render() {
        if (!this.props.stream) {
            return (
                <div>
                    Searching for Stream...
                </div>
            )
        }

        return (
            <Modal 
                header={this.renderHeader()}
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
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
    deleteStream,
})(StreamDelete);