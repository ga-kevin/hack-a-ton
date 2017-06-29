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
        ...state,
        ideas: [
          {
            id: 0,
            title: 'title',
            desc: 'description',
            author: 'author',
            type: 'build',
            votes: 0,
            progress: {
              members: [],
              status: 0
            },
          },
          {
            id: 1,
            title: 'title2',
            desc: 'description2',
            author: 'author2',
            type: 'proposal',
            votes: 0,
            progress: {
              members: [],
              status: 0
            },
          }
        ]
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
