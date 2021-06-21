export const Types = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

const INITIAL_STATE = {
  name: null,
};

export default function reducer(state = INITIAL_STATE, {type, payload = null}) {
  switch (type) {
    case Types.LOGIN:
      return {
        name: payload.name,
      };
    default:
      return state;
  }
}

export const login = name => ({
  type: Types.LOGIN,
  payload: {
    name,
  },
});
