export const initialState = {
  openedMenu: {
    status: false,
  },
};

export const actionTypes = {
  SET_OPENMENU: "SET_OPENMENU",
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_OPENMENU:
      return {
        ...state,
        openedMenu: action.openedMenu,
      };
    default:
      return state;
  }
}

export default reducer;
