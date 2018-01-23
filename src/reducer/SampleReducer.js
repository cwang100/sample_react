const initialState = {  
    text: 'Hello',
    events: [] 
} 
export const reducer = (state = initialState, action) => {  
    switch (action.type) {   
        case 'BUTTON_CLICK': 
        	console.log('button clicked')
        	let fullData = action.data;
        	let eventIds = action.data.event_ids;

		    	return {
		        text: eventIds,
		        events: eventIds
		      };

		    case 'CLICK_INTO_EVENT':

		    return {


		    };
            
        default:  
            return initialState;  
    }  
}  