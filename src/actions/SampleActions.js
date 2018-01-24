import $ from "jquery";

export const getData = (dispatch, getState) => {
	return $.ajax({
        url: 'https://smarkets.com/v0/listings/slug/sport/horse-racing/?period=upcoming',
        method: 'GET'
    }).done(data => {
        dispatch({type:'BUTTON_CLICK', data:data})
    })
}

export const getEventData = (dispatch, getState) => {
    return $.ajax({
        url: 'https://smarkets.com/v0/listings/slug/sport/horse-racing/?period=upcoming',
        method: 'GET'
    }).done(data => {
        dispatch({type:'CLICK_INTO_EVENT', data:data.events})
    })
}