export const attemptSlide = (index) => dispatch => {
  dispatch({
    type: 'ATTEMPT_SLIDE',
    payload: index
  })
}
