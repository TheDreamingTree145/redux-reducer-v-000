export function manageFriends(state = {friends: [],}, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [
          ...state.friends,
          action.friend
        ]
      })
    case 'REMOVE_FRIEND':
      const index = state.friends.findIndex(friend => friend.id === action.id)
      return {frie
    default:
      return state;
  }
}
