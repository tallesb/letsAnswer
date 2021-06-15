export const Types = {
  GET_QUESTIONS: 'GET_QUESTIONS',
  GET_QUESTIONS_SUCCESS: 'GET_QUESTIONS_SUCCESS',
  GET_QUESTIONS_ERROR: 'GET_QUESTIONS_ERROR',
};

const INITIAL_STATE = {
  selectedCategoryId: null,
  loading: false,
  error: null,
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type} = action;

  switch (type) {
    case Types.GET_QUESTIONS:
      return {
        selectedCategory: action.payload.categoryId,
        loading: true,
        error: null,
      };
    case Types.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

export const selectCategory = categoryId => ({
  type: Types.GET_QUESTIONS,
  payload: {
    categoryId,
  },
});
