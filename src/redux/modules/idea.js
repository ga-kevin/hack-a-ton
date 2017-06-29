export const VOTE_UP = 'redux/idea/VOTE_UP';
export const VOTE_DOWN = 'redux/idea/VOTE_DOWN';

const defaultState = {
  ideas: []
};

// {
//   ideas: [
//     id,
//     title,
//     desc,
//     author,
//     type,
//     vizzotes,
//     progress: {
//       members: [],
//       status
//     }
//   ]
// }

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case VOTE_UP:
      return {
        ...state
      };
    default:
      return state;
  }
}

export function voteUp(id) {
  return {
    type: VOTE_UP,
    id
  }
}
