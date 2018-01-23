import $ from "jquery";

export const getData = function(dispatch, getState){

		return $.ajax({
        url: 'https://smarkets.com/v0/listings/slug/sport/horse-racing/?period=upcoming',
        method: 'GET'
    }).done(data => {
        dispatch({type:'BUTTON_CLICK', data:data})
    })
}

// export const getData = {
//     type:'BUTTON_CLICK'
// }