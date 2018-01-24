import _ from 'lodash'

const initialState = {  
    text: {},
    events: [],
    eventDetails: ''
} 

export const reducer = (state = initialState, action) => {
    let newState = initialState;
    switch (action.type) {   
        case 'BUTTON_CLICK': 
        	let fullData = action.data;
        	let eventIds = fullData.event_ids;
            newState = _.assign({}, initialState, {
                text: fullData.events,
                events: eventIds
            });
            
		    return newState;

		case 'CLICK_INTO_EVENT':
            newState = _.assign({}, initialState, {
                eventDetails: action.data
            });
        	return newState;
            
        default:  
            return newState;  
    }  
}  