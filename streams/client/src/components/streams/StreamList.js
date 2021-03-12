import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList = () => {
        console.log('this.props.streams =', this.props.streams);
        return this.props.streams.map(stream => {
            return (
                // <div key={stream.id} className="ui segment">
                //     <div className="header">{stream.title}</div>
                //     <div className="item">{stream.description}</div>
                // </div>
                <div key={stream.id} className="item">
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        })    
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className='ui celled list'>
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        streams: Object.values(state.streams),
    }
}

export default connect(mapStateToProps, {
    fetchStreams
})(StreamList);