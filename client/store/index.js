import ChannelReducer from './channels'; 
import MessagesReducer from './messages'; 
import Name from './name'; 

import { combineReducers } from 'redux'; 

export default combineReducers({
	ChannelReducer, 
	MessagesReducer, 
	Name
})

export * from './channels'; 
export * from './messages'; 
export * from './name';


