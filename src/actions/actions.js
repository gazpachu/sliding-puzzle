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

export const cheat = () => dispatch => {
  dispatch({
    type: 'CHEAT'
  })
}

export const endGame = () => dispatch => {
  dispatch({
    type: 'END_GAME'
  })
}
