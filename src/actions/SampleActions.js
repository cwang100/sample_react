import $ from "jquery";

export function getEvents (event) {

	return (dispatch, getState) => {
		return $.ajax({
        url: 'https://smarkets.com/v0/listings/slug/sport/'+ event +'/?period=upcoming',
        method: 'GET'
    }).done(data => {
        dispatch({type:'BUTTON_CLICK', data:data})
    })
  }
}

export function getEventDetailData (eventID) {
	return (dispatch, getState) => {
		return $.ajax({
        url: 'https://smarkets.com/v0/listings/slug/sport/horse-racing/?period=upcoming',
        method: 'GET'
    }).done(data => {
        dispatch({type:'BUTTON_CLICK', data:data})
    })
  }
}