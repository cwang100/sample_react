import _ from 'lodash'

const initialState = {  
    text: 'Hello',
    events: [] 
} 
export const reducer = (state = initialState, action) => {  
    switch (action.type) {   
        case 'BUTTON_CLICK': 
        	console.log('button clicked')
        	let fullData = action.data;
        	let eventIds = fullData.event_ids;


		    	return {
		        text: fullData.events,
		        events: eventIds
		      };

		    case 'CLICK_INTO_EVENT':

		    return {
		    	text: action.data
		    };
            
        default:  
            return initialState;  
    }  
}  