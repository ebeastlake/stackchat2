import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
    return {
      channels: state.channels,
      messages: state.messages
    };
}

// const mapDispatchToProps = function(dispatch) {
//   return {};
// }

function ChannelList(props) {

  return (
    <ul>
    {
      props.channels.map(channel => {
        return (
          <li key={channel.id}>
            <NavLink to={`/channels/${channel.id}`} activeClassName="active">
              <span>{channel.name}</span>
              <span className="badge">{ props.messages.filter(message => message.channelId === 1).length }</span>
            </NavLink>
          </li>
          )
      })
    }
    <li>
      <NavLink to="/new-channel">Create a channel...</NavLink>
    </li>
    </ul>
    );
}

const ChannelListContainer = connect(mapStateToProps)(ChannelList);
export default ChannelListContainer;
