export const slide = (payload) => dispatch => {
  dispatch({
    type: 'SLIDE',
    payload
  })
}

export const increaseTime = (time) => dispatch => {
  dispatch({
    type: 'INCREASE_TIME',
    payload: time
  })
}
