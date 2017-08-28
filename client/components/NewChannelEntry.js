import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannelName, postChannel } from '../store';

function NewChannelEntry (props) {
  //console.log(props.history);
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input value={props.newChannelEntry} onChange={props.handleChange} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

const mapStateToProps = function(state) {
  return {
    newChannelEntry: state.newChannelEntry
  };  
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleChange: function(event) {
      dispatch(writeChannelName(event.target.value));
    }, 
    handleSubmit: function(event) {
      event.preventDefault();
      dispatch(postChannel({name: event.target.channelName.value}, ownProps.history));
      dispatch(writeChannelName(''));
    }
  };
}

const Container = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default Container;