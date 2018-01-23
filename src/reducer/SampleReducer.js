import _ from 'lodash'

const initialState = {  
    text: '',
    events: [],
    eventDetails: ''
} 
export const reducer = (state = initialState, action) => {  
    switch (action.type) {   
        case 'BUTTON_CLICK': 
        	let fullData = action.data;
        	let eventIds = fullData.event_ids;


		    return {
		        text: fullData.events,
		        events: eventIds
		      };

		case 'CLICK_INTO_EVENT':
        	return {
		    	eventDetails: action.data
		    };
            
        default:  
            return initialState;  
    }  
}  