import React, { Component } from 'react';
import { connect } from 'react-redux';
import { undo, redo } from '../reducers/actions.js';

class History extends Component {
    
    render() {
        return <div id="history-controls">
           <button onClick={this.props.undo}> Undo</button>
           <button onClick={this.props.redo}> Redo</button>
        </div>
    }

}
function mapDispatchToProps(dispatch){
    return {
        undo: () => dispatch(undo()),
        redo: () => dispatch(redo())
    }
}
export default connect(null, mapDispatchToProps)(History)