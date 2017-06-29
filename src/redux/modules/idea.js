export const HYDRATE_TILES = 'redux/idea/HYDRATE_TILES';
export const VOTE_UP = 'redux/idea/VOTE_UP';
export const VOTE_DOWN = 'redux/idea/VOTE_DOWN';

const defaultState = {
  ideas: []
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case HYDRATE_TILES:
      return {
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
    }
    case VOTE_UP:
      return {}
    case VOTE_DOWN:
      return {
        ...state,

      };
    default:
      return state;
  }
}

export function hydrateTiles() {
  return {
    type: HYDRATE_TILES
  }
}

export function voteUp(id) {
  return {
    type: VOTE_UP,
    id
  }
}

export function voteDown(id) {
  return {
    type: VOTE_DOWN,
    id
  }
}
