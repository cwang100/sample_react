import _ from 'lodash'

const initialState = {  
    events: {},
    eventIDs: [],
    eventDetails: ''
} 

export const reducer = (state = initialState, action) => {
    let newState = initialState;
    switch (action.type) {   
        case 'BUTTON_CLICK': 
        	let fullData = action.data;
        	let eventIds = fullData.event_ids;
            newState = _.assign({}, initialState, {
                events: fullData.events,
                eventIDs: eventIds,
                contract_groups: fullData.contract_groups,
                contracts: fullData.contracts
            });
            
		    return newState;

		case 'CLICK_INTO_EVENT':
            newState = _.assign({}, initialState, {
                eventDetails: action.data
            });
        	return newState;
        
        case 'POPULAR_EVENTS':
            newState = _.assign({}, initialState, {
                popular: action.data
            });
            return newState;
        default:  
            return newState;  
    }  
}  