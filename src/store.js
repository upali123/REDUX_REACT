import { createStore } from "redux";

import rootRedux from "./Reducers";

const store = createStore(
  rootRedux
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
