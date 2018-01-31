import _ from 'lodash'

const initialState = {  
    events: {},
    eventIDs: [],
    eventDetails: '',
    popularEvents: {}
} 

export const reducer = (state = initialState, action) => {
    let newState = initialState;
    switch (action.type) {   
        case 'LOADING':
            newState = _.assign({}, state, {
                loading: true
            });
            
            return newState;
        case 'FAILED': 
            newState = _.assign({}, state, {
                failed: true
            });
            
            return newState;
        case 'BUTTON_CLICK': 
        	let fullData = action.data;
        	let eventIds = fullData.event_ids;
            newState = _.assign({}, state, {
                events: fullData.events,
                eventIDs: eventIds,
                contract_groups: fullData.contract_groups,
                contracts: fullData.contracts,
                loading: false
            });
            
		    return newState;

		case 'CLICK_INTO_EVENT':
            newState = _.assign({}, state, {
                eventDetails: action.data,
                loading: false
            });
        	return newState;
        
        case 'POPULAR_EVENTS':
            newState = _.assign({}, state, {
                popular: action.data.results,
                loading: false
            });
            return newState;
        default:  
            return newState;  
    }  
}  