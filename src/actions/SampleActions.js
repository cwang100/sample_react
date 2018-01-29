import $ from "jquery";

export function getEvents (event) {
	return (dispatch, getState) => {
        dispatch({type:'LOADING'})
		return $.ajax({
        url: 'https://smarkets.com/v0/listings/slug/sport/'+ event +'/?period=upcoming',
        method: 'GET'
    }).done(data => {
        dispatch({type:'BUTTON_CLICK', data:data})
    }).fail(xhr => {
        dispatch({type:'FAILED'})
    })
  }
}

export function getEventDetailData (eventID) {
	return (dispatch, getState) => {
		return $.ajax({
        url: 'https://fe-api.smarkets.com/v0/events/id/' + eventID,
        method: 'GET'
    }).done(data => {
        dispatch({type:'CLICK_INTO_EVENT', data:data})
    })
  }
}

export function getPopularEvents () {
    return (dispatch, getState) => {
        return $.ajax({
        url: 'https://fe-api.smarkets.com/v0/events/popular/',
        method: 'GET'
    }).done(data => {
        dispatch({type:'POPULAR_EVENTS', data:data})
    })
  }
}