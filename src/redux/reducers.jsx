// reducers.js
const initialState = {
    city: '',
  };
  
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CITY':
        return {
          ...state,
          city: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default weatherReducer;
  