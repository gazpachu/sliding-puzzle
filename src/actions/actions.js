export const slide = (index) => dispatch => {
  dispatch({
    type: 'SLIDE',
    payload: index
  })
}

export const increaseTime = (time) => dispatch => {
  dispatch({
    type: 'INCREASE_TIME',
    payload: time
  })
}
