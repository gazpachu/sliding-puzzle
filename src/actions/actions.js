export const attemptSlide = (index) => dispatch => {
  dispatch({
    type: 'ATTEMPT_SLIDE',
    payload: index
  })
}

export const increaseTime = (time) => dispatch => {
  dispatch({
    type: 'INCREASE_TIME',
    payload: time
  })
}
