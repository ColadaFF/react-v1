import { Map } from 'immutable';

const ADD_VALUE = 'ADD_VALUE';
const REMOVE_VALUE = 'REMOVE_VALUE';
const INCREASE_STATS = 'INCREASE_STATS';
const DECREASE_STATS = 'DECREASE_STATS';

export function addPerson(person, id) {
  return {
    type: ADD_VALUE,
    payload: {
      person,
      id,
    },
  };
}

export function removePerson(id) {
  return {
    type: REMOVE_VALUE,
    payload: {
      id,
    },
  };
}

export function increaseStats(id) {
  return {
    type: INCREASE_STATS,
    payload: {
      id,
    },
  };
}
export function decreaseStats(id) {
  return {
    type: DECREASE_STATS,
    payload: {
      id,
    },
  };
}

const initialState = Map({
  '1': {
    id: '1',
    name: 'Daniel',
    stats: 0,
  },
});
export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_VALUE:
      return state.set(action.payload.id, action.payload.person);
    case REMOVE_VALUE:
      return state.delete(action.payload.id);
    case INCREASE_STATS: {
      const { id } = action.payload;
      const person = state.get(id.toString());
      if (person) {
        const newPerson = Object.assign({}, person, {
          stats: +person.stats + 1,
        });
        return state.set(id.toString(), newPerson);
      }
      return state;
    }
    case DECREASE_STATS: {
      const { id } = action.payload;
      const person = state.get(id.toString());
      if (person) {
        const newPerson = Object.assign({}, person, {
          stats: +person.stats - 1,
        });
        return state.set(id.toString(), newPerson);
      }
      return state;
    }
    default:
      return state;
  }
}
