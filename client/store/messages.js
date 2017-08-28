import axios from 'axios';
import socket from '../socket';

const initialState = {
	messages: [], 
	newMessageEntry: ''
}

const GET_MESSAGE = 'GET_MESSAGE';
const GET_MESSAGES = 'GET_MESSAGES';
const WRITE_MESSAGE = 'WRITE_MESSAGE';

export function getMessage (message) {
  const action = { type: GET_MESSAGE, message };
  return action;
}

export function getMessages (messages) {
  const action = { type: GET_MESSAGES, messages };
  return action;
}

export function writeMessage (content) {
  const action = { type: WRITE_MESSAGE, content };
  return action;
}

export function fetchMessages () {

  return function thunk (dispatch) {
    return axios.get('/api/messages')
      .then(res => res.data)
      .then(messages => {
        const action = getMessages(messages);
        dispatch(action);
      });
  }
}

export function postMessage (message) {

  return function thunk (dispatch) {
    return axios.post('/api/messages', message)
      .then(res => res.data)
      .then(newMessage => {
        const action = getMessage(newMessage);
        dispatch(action);
        socket.emit('new-message', newMessage);
      });
  }
}

function messagesReducer (state = initialState, action) {
	switch(action.type) {
		case GET_MESSAGES:
	      return {
	        ...state,
	        messages: action.messages
	      };

	    case GET_MESSAGE:
	      return {
	        ...state,
	        messages: [...state.messages, action.message]
	      };

	    case WRITE_MESSAGE:
	      return {
	        ...state,
	        newMessageEntry: action.content
	      }; 
	    default:
      		return state;
		
	} 
}

export default messagesReducer; 