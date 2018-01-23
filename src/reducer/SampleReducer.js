const initialState = {  
    text: 'Hello'  
} 
export const reducer = (state = initialState, action) => {  
	console.log(action.type)
    switch (action.type) {   
        case 'BUTTON_CLICK': 
        	console.log('button clicked')
		    return {
		        text: action.data
		      };
            
        default:  
            return initialState;  
    }  
}  